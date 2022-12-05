import React, { useState } from 'react';
import RadiobuttonForm from './RadiobuttonForm.tsx';
import { useTranslation } from 'react-i18next';
import CheckboxForm from './CheckboxForm.tsx';
import ScaledForm from './ScaledForm.tsx';
import FreeTextForm from './FreeTextForm.tsx';
import FormSummary from './FormSummary.tsx';
import './FeedbackForm.css';
import { t } from 'i18next';

const langs = {
  en: { nativeName: 'English' },
  se: { nativeName: 'Svenska' }
};

interface FormData {
  question1: number,
  question2: Array<boolean>,
  question3: number,
  question4: string,
  newsletter: boolean,
}

/** Main component handling the feedback form.
 * 
 * Handles:
 * - Language
 * - Number of steps in survey
 * - Handle answers
 * - Handles the AJAX POST
 */
const FeedbackForm = () => {
  const [formPart, setFormPart] = useState(1);
  const [data, setData] = useState({} as FormData);
  const { i18n } = useTranslation();

  const resetData = () => {
    setData({
      question1: 0,
      question2: [],
      question3: 0,
      question4: '',
      newsletter: false,
    });
    setFormPart(1);
  };

  const updateQ1 = (val: number) => {
    setData({
      ...data,
      question1: val
    })
  }

  const updateQ2 = (val: Array<boolean>) => {
    setData({
      ...data,
      question2: val
    })
  }

  const updateQ3 = (val: number) => {
    setData({
      ...data,
      question3: val
    })
  }

  const updateQ4 = (val: string, bool: boolean) => {
    setData({
      ...data,
      question4: val,
      newsletter: bool
    })
  }

  // Submitting the form data to dummy API, will never be succesful, hence commented out.
  // Hardcoded to move to the next step.
  const save = () => {
    let form = JSON.stringify(data);
    
    fetch("url-placeholder", {
      method: 'post',
      body: form,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        if (response.status === 201) {
        console.log("Form submitted")
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <>
      <div className="flex justifyCenter topBanner">
        <div className='langSwitch'>
          {Object.keys(langs).map((lng) => (
            <button className={'button_segment ' + (i18n.resolvedLanguage === lng ? 'chosen' : '')} key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {langs[lng].nativeName}
            </button>
          ))}
        </div>
        <div onClick={() => resetData()} className="button bottomMargin leftMargin red selfCenter">
          {t('button.reset')}
        </div>
      </div>


      <div className='feedbackContainer'>
        {formPart === 1 ?
          <RadiobuttonForm next={() => setFormPart(2)} updateAnswer={updateQ1} />
          : formPart === 2 ?
            <CheckboxForm next={() => setFormPart(3)} updateAnswer={updateQ2} />
            : formPart === 3 ?
              <ScaledForm next={() => setFormPart(4)} updateAnswer={updateQ3} />
              : formPart === 4 ?
                <FreeTextForm next={() => setFormPart(5)} updateAnswer={updateQ4} />
                  : <FormSummary save={() => save()}  formData={data} />
        }
      </div>
    </>
  )
}

export default FeedbackForm;

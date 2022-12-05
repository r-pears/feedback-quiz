import { t } from 'i18next';
import React, { useState } from 'react';
import './FreeTextForm.css';

interface ComponentProps {
  save: Function
  updateAnswer: Function
}

/** Free Text Form 
*
* Text box for free input, can be left empty.
* When finished submit the form to the API.
*/
const FreeTextForm = (props: ComponentProps) => {
  const [freeText, setFreetext] = useState('');
  const [newsSignup, setNewsSignup] = useState(false);

  const checkText = () => {
    props.updateAnswer(freeText, newsSignup)
    props.save()
  }

  const handleChange = (event: any) => {
    setFreetext(event.target.value)
  }

  // Toggle agreement to newsletter
  const toggleNewsletter = () => {
    setNewsSignup(!newsSignup);
  }

  return (
    <div className='h100 flex flexCol justifyBetween'>
      <div>
        <h2>{t('text.question')}</h2>
        <div>{t('text.instruction')}</div>
        <textarea placeholder={t('text.placeholder')} type="text" rows={15} className='textArea topMargin' value={freeText} onChange={handleChange}  /> 
      </div>

      <div className='flex flexCol'>
        <div className="fontSmall">
          {t('news.text')}
        </div>
        <div onClick={() => toggleNewsletter()} className='flex newsletter'>
          <div className={"newsLetterBox " + (newsSignup ? 'chosen' : '')} />
          <div className="leftMargin selfCenter">{t('news.signup')}</div>
        </div>        
      </div>

      
      <div onClick={() => checkText()} className="button">
        {t('button.submit')}
      </div>
    </div>
  )
}


export default FreeTextForm;
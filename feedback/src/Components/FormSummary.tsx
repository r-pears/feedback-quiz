import { t } from 'i18next';
import React from 'react'
import './FormSummary.css';

interface ComponentProps {
  formData: {
    question1: number,
    question2: Array<boolean>,
    question3: number,
    question4: string,
    newsletter: boolean,
  }
  save: Function
}
const FormSummary = (props: ComponentProps) => {

  return (
    <div className='flex h100 flexCol justifyBetween'>
      <div>
        <h2>{t('summary.title')}</h2>
        <h4>{t('radio.question')}</h4>
        <div className='summaryAnswer'>{t('radio.alternative' + props.formData.question1)}</div>
        <h4>{t('checkbox.question')}</h4>
        <div className='summaryAnswer'>
          {props.formData.question2[1] &&
            <div>{t('checkbox.alternative1')}</div>
          }
          {props.formData.question2[2] &&
            <div>{t('checkbox.alternative2')}</div>
          }
          {props.formData.question2[3] &&
            <div>{t('checkbox.alternative3')}</div>
          }
          {props.formData.question2[4] &&
            <div>{t('checkbox.alternative4')}</div>
          }
          {props.formData.question2[5] &&
            <div>{t('checkbox.alternative5')}</div>
          }
        </div>
        <h4>{t('scaled.question')}</h4>
        <div className='summaryAnswer'>{t('scaled.alternative' + props.formData.question3)}</div>
        <h4>{t('text.question')}</h4>
        <div className='summaryAnswer'>{props.formData.question4}</div>
        <h4>
          {props.formData.newsletter ?
            t('news.agree')
            :
            t('news.disagree')
          }          
        </h4>
      </div>
      <div onClick={() => props.save()} className="button">
        {t('button.submit')}
      </div>
    </div>
  )
}

export default FormSummary;

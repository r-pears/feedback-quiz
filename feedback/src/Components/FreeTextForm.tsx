import { t } from 'i18next';
import React, { useState } from 'react';
import './FreeTextForm.css';

interface ComponentProps {
  save: Function
  updateAnswer: Function
}

const FreeTextForm = (props: ComponentProps) => {
  const [freeText, setFreetext] = useState('');

  const checkText = () => {
    if (freeText.length < 1) return;

    props.updateAnswer(freeText)
    props.save()
  }

  const handleChange = (event: any) => {
    setFreetext(event.target.value)
  }

  return (
    <div className='h100 flex flexCol justifyBetween'>
      <div>
        <h2>{t('text.question')}</h2>
        <div>{t('text.instruction')}</div>
        <input placeholder={t('text.placeholder')} type="text" className='textArea' value={freeText} onChange={handleChange}  />
      </div>

      <div onClick={() => checkText()} className="button">

      </div>
    </div>
  )
}


export default FreeTextForm;
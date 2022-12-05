import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RadiobuttonForm.css';

interface ComponentProps {
  next: Function
  updateAnswer: Function
}

/** Radio Button Form
 * 
 * Multiple choice question, can only choose one option.
 * Have to choose an option to go to the next page.
 */
const RadiobuttonForm = (props: ComponentProps) => {
  const [alternative, setAlternative] = useState(0);
  const { t } = useTranslation();

  const checkAnswer = () => {
    if (alternative === 0) return;
    props.updateAnswer(alternative)
    props.next();
  }

  return (
    <div className='flex flexCol justifyBetween h100'>
      <div>
        <h2>{t('radio.question')}</h2>
        <div>{t('radio.instruction')}</div>

        <div onClick={() => setAlternative(1)} className="flex topMargin cursorPointer radioBtnDiv">
          <div className={"radioBtn " + (alternative === 1 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('radio.alternative1')}</div>
        </div>
        <div onClick={() => setAlternative(2)} className="flex topMargin cursorPointer radioBtnDiv">
          <div className={"radioBtn " + (alternative === 2 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('radio.alternative2')}</div>
        </div>
        <div onClick={() => setAlternative(3)} className="flex topMargin cursorPointer radioBtnDiv">
          <div className={"radioBtn " + (alternative === 3 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('radio.alternative3')}</div>
        </div>
        <div onClick={() => setAlternative(4)} className="flex topMargin cursorPointer radioBtnDiv">
          <div className={"radioBtn " + (alternative === 4 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('radio.alternative4')}</div>
        </div>
        <div onClick={() => setAlternative(5)} className="flex topMargin cursorPointer radioBtnDiv">
          <div className={"radioBtn " + (alternative === 5 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('radio.alternative5')}</div>
        </div>        
      </div>

      <div onClick={() => checkAnswer()} className="button">
        {t('button.next')}
      </div>
    </div>
  )
}

export default RadiobuttonForm;

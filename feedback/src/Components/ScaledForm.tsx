import { t } from 'i18next';
import React, { useState } from 'react';
import './ScaledForm.css';

interface ComponentProps {
  next: Function
  updateAnswer: Function
}

/** Scaled Form 
 * 
 * A weighted question which returns a number, how likely on a scale 
 * a user is to recommend us. Between 1-5, where 1 is the lowest.
 * An answer has to be given.
 */
const ScaledForm = (props: ComponentProps) => {
  const [scaledValue, setScaledValue] = useState(0);
  const [formError, setFormError] = useState(false);

  // Check that one value has been chosen, otherwise return.
  const checkValues = () => {
    if (scaledValue === 0) {
      setFormError(true);
      return;
    }
    props.updateAnswer(scaledValue);
    props.next();
  }

  const chooseValue = (val: number) => {
    setFormError(false);
    setScaledValue(val);
  }

  return (
    <div className="h100 flex flexCol justifyBetween">
      <div>
        <h2>{t('scaled.question')}</h2>
        <div>{t('scaled.instructions')}</div>

        <div onClick={() => chooseValue(1)} className={"flex scaledBox topMargin " + (scaledValue === 1 ? 'chosen' : '')}>
          <div className='puppyFace nr1' />
          <div className='selfCenter leftMargin'>{t('scaled.alternative1')}</div>
        </div>
        <div onClick={() => chooseValue(2)} className={"flex scaledBox " + (scaledValue === 2 ? 'chosen' : '')}>
          <div className="puppyFace nr2" />
          <div className='leftMargin selfCenter'>{t('scaled.alternative2')}</div>
        </div>
        <div onClick={() => chooseValue(3)} className={"flex scaledBox " + (scaledValue === 3 ? 'chosen' : '')}>
          <div className="puppyFace nr3" />
          <div className='leftMargin selfCenter'>{t('scaled.alternative3')}</div>
        </div>
        <div onClick={() => chooseValue(4)} className={"flex scaledBox " + (scaledValue === 4 ? 'chosen' : '')}>
          <div className="puppyFace nr4" />
          <div className='leftMargin selfCenter'>{t('scaled.alternative4')}</div>
        </div>
        <div onClick={() => chooseValue(5)} className={"flex scaledBox " + (scaledValue === 5 ? 'chosen' : '')}>
          <div className="puppyFace nr5" />
          <div className='leftMargin selfCenter'>{t('scaled.alternative5')}</div>
        </div>
      </div>

      {formError &&
        <div className='formError'>
          {t('form.error')}
        </div>
      }

      <div onClick={() => checkValues()} className='button'>
        {t('button.next')}
      </div>
    </div>
  )
}

export default ScaledForm;

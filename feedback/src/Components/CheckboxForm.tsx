import { t } from 'i18next';
import React, { useState } from 'react';
import './CheckboxForm.css';

interface ComponentProps {
  next: Function
  updateAnswer: Function
}

/** Checkbox Form 
 * 
 * Handles multiple choice question.
 * At least one option has to be picked, there is no upper limit.
*/
const CheckboxForm = (props: ComponentProps) => {
  const [mark1, setMark1] = useState(false)
  const [mark2, setMark2] = useState(false)
  const [mark3, setMark3] = useState(false)
  const [mark4, setMark4] = useState(false)
  const [mark5, setMark5] = useState(false)

  const checkAnswers = () => {
    const answers = {
      1: mark1,
      2: mark2,
      3: mark3,
      4: mark4,
      5: mark5
    }

    if (Object.values(answers).indexOf(true) > -1) {
      props.updateAnswer(answers);
      props.next()      
    }
  }

  const toggleAnswer = (index: number) => {
    if (index === 0) {
      setMark1(!mark1);
    } else if (index === 1) {
      setMark2(!mark2);
    } else if (index === 2) {
      setMark3(!mark3);
    } else if (index === 3) {
      setMark4(!mark4);
    } else {
      setMark5(!mark5);
    }
  }

  return (
    <div className='h100 flex flexCol justifyBetween'>
      <div>
        <h2>{t('checkbox.title')}</h2>
        <div>{t('checkbox.instructions')}</div>

        <div onClick={() => toggleAnswer(0)} className={"flex cursorPointer topMargin checkHover "}>
          <div className={"checkbox " + (mark1 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('checkbox.alternative1')}</div>
        </div>
        <div onClick={() => toggleAnswer(1)} className={"flex cursorPointer topMargin checkHover "}>
          <div className={"checkbox " + (mark2 ? "chosen" : '')} />
          <div className='selfCenter leftMargin'>{t('checkbox.alternative2')}</div>
        </div>
        <div onClick={() => toggleAnswer(2)} className={"flex cursorPointer topMargin checkHover "}>
          <div className={"checkbox " + (mark3 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('checkbox.alternative3')}</div>
        </div>
        <div onClick={() => toggleAnswer(3)} className={"flex cursorPointer topMargin checkHover "}>
          <div className={"checkbox " + (mark4 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('checkbox.alternative4')}</div>
        </div>
        <div onClick={() => toggleAnswer(4)} className={"flex cursorPointer topMargin checkHover "}>
          <div className={"checkbox " + (mark5 ? 'chosen' : '')} />
          <div className='selfCenter leftMargin'>{t('checkbox.alternative5')}</div>
        </div>
      </div>
      
      <div onClick={() => checkAnswers()} className="button">
        {t('button.next')}
      </div>
    </div>
  )
}

export default CheckboxForm;
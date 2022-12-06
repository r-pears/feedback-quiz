import { t } from 'i18next';
import React from 'react';
import './FormThanks.css';

/** Form Thanks
 * 
 * Thanks for submitting the form.
 * Shows some useful articles or blogs to keep the user engaged.
 */
const FormThanks = () => {

  // Redirect to blog article, but in this case it's a dummy alert.
  const goTo = (article: number) => {
    // window.location.pathname = `https://www.useful.com/blog/` + article;
    alert('redirect to article')
  }

  return (
    <div className='h100 '>
      <h1>{t('thanks.title')}</h1>
      <h4>{t('thanks.extra')}</h4>
      
      <div className="thanksTips flex flexCol topMargin">
        <div className='flex'>
          <div onClick={() => goTo(1)} className="thanksSuggestion dog">
            <div className='suggestionTitle'>{t('thanks.suggestion1')}</div>
          </div> 
          <div onClick={() => goTo(2)} className="thanksSuggestion bunny">
            <div className='suggestionTitle'>{t('thanks.suggestion2')}</div>
          </div>   
        </div>

        <div className='flex'>
          <div onClick={() => goTo(3)} className="thanksSuggestion kitten">
            <div className='suggestionTitle'>{t('thanks.suggestion3')}</div>
          </div> 
          <div onClick={() => goTo(4)} className="thanksSuggestion boar">
            <div className='suggestionTitle'>{t('thanks.suggestion4')}</div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default FormThanks;

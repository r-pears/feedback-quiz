import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          radio: {
            question: `What's your favorite animal?`,
            instruction: 'Choose one option.',
            alternative1: `Dog`,
            alternative2: `Cat`,
            alternative3: `Horse`,
            alternative4: `Goat`,
            alternative5: `Bunny`,
          },
          checkbox: {
            question: `What did you like about the consultation?`,
            instructions: `You can choose multiple options.`,
            alternative1: `The veterinary was knowledgeable`,
            alternative2: `Excellent video quality`,
            alternative3: `My questions were answered`,
            alternative4: `My pet was treated properly`,
            alternative5: `I had time to ask all my questions`
          },
          scaled :{
            question: `Would you recommend us to a friend?`,
            instructions: `Choose an between 1-5.`,
            alternative1: `1 - No`,
            alternative2: `2 - Unlikely`,
            alternative3: `3 - Maybe`,
            alternative4: `4 - Likely`,
            alternative5: `5 - Yes!`,
          },
          text: {
            question: `Would you like to add something?`,
            instruction: `Write your opinions below (voluntary).`,
            placeholder: `Write here.`,
          },
          button: {
            next: `Next`,
            reset: `Reset form`,
            submit: `Submit`,
          },
          form: {
            error: `You must choose an alternative.`
          },
          news: {
            signup: `I agree.`,
            text: `Do you want to receive newsletters and tips from us? Signup here!`,
            agree: `You've signed up for our newsletter!`,
            disagree: `You didn't sign up for our newsletter`,
          },
          summary: {
            title: `Review your answers before submitting`,
          },
          thanks: {
            title: `Thank you!`,
            extra: `Check out these helpful articles and guides.`,
            suggestion1: `How to train a puppy`,
            suggestion2: `How to groom a bunny`,
            suggestion3: `Kitten-indoor or not?`,
            suggestion4: `Are boars good pets?`,
          }
        }
      },
      se: {
        translation: {
          radio: {
            question: 'Vilket ??r ditt favoritdjur?',
            instruction: 'V??lj ett alternativ',
            alternative1: `Hund`,
            alternative2: `Katt`,
            alternative3: `H??st`,
            alternative4: `Get`,
            alternative5: `Kanin`,
          },
          checkbox: {
            question: `Vad gillade du med m??tet?`,
            instructions: `Du kan v??lja flera alternativ.`,
            alternative1: `Veterin??ren var mycket kunnig`,
            alternative2: `Mycket bra videokvalit??`,
            alternative3: `Mina fr??gor blev besvarade`,
            alternative4: `Mitt husdjur blev hj??lpt`,
            alternative5: `Jag fick svar p?? alla mina fr??gor`
          },
          scaled :{
            question: `Skulle du rekommendera oss till en v??n?`,
            instructions: `V??lj fr??n 1-5.`,
            alternative1: `1 - Nej`,
            alternative2: `2 - Osannolikt`,
            alternative3: `3 - Kanske`,
            alternative4: `4 - Sannolikt`,
            alternative5: `5 - Ja!`,
          },
          text: {
            question: `Vill du l??gga till n??got?`,
            instruction: `Skriv ned dina ??sikter (frivilligt).`,
            placeholder: `Skriv h??r.`,
          },
          button: {
            next: `N??sta`,
            reset: `Starta om`,
            submit: `Skicka in`,
          },
          form: {
            error: `Du m??ste v??lja ett alternativ.`
          },
          news: {
            signup: `Jag vill f?? nyhetsbrev.`,
            text: `Vill du f?? nyhetsbrev och tips fr??n oss?`,
            agree: `Du vill prenumera p?? v??rt nyhetsbrev`,
            disagree: `Du vill inte f?? v??rt nyhetsbrev`,
          },
          summary: {
            title: `Se dina svar innan du skickar in`,
          },
          thanks: {
            title: `Tack f??r ditt svar!`,
            extra: `H??r ??r n??gra artiklar och guider som kan hj??lpa dig.`,
            suggestion1: `S?? tr??nar du en valp`,
            suggestion2: `P??lsv??rd f??r kaniner`,
            suggestion3: `Inomhuskatt eller inte?`,
            suggestion4: `Vildsvin som husdjur`,
          }
        }
      }
    }
  });

export default i18n;
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
            question: ``,
            instruction: ``,
            placeholder: ``,
          },
          button: {
            next: `Next`,
            reset: `Reset form`,
            submit: `Submit`,
          }
        }
      },
      se: {
        translation: {
          radio: {
            question: 'Vilket är ditt favoritdjur?',
            instruction: 'Välj ett alternativ',
            alternative1: `Hund`,
            alternative2: `Katt`,
            alternative3: `Häst`,
            alternative4: `Get`,
            alternative5: `Kanin`,
          },
          checkbox: {
            question: `Vad gillade du med mötet?`,
            instructions: `Du kan välja flera alternativ.`,
            alternative1: `Veterinären var mycket kunnig`,
            alternative2: `Mycket bra videokvalité`,
            alternative3: `Mina frågor blev besvarade`,
            alternative4: `Mitt husdjur blev hjälpt`,
            alternative5: `Jag fick svar på alla mina frågor`
          },
          scaled :{
            question: `Skulle du rekommendera oss till en vän?`,
            instructions: `Välj från 1-5.`,
            alternative1: `1 - Nej`,
            alternative2: `2 - Osannolikt`,
            alternative3: `3 - Kanske`,
            alternative4: `4 - Sannolikt`,
            alternative5: `5 - Ja!`,
          },
          text: {
            question: ``,
            instruction: ``,
            placeholder: ``,
          },
          button: {
            next: `Nästa`,
            reset: `Starta om`,
            submit: `Skicka in`,
          }
        }
      }
    }
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({   
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend:{
      backends: [
        HttpBackend,
        resourcesToBackend((lng:string) => import(`../public/locals/${lng}/translation.json`))       
      ],
      backendOptions: [{
        loadPath: '/locals/{{lng}}/translation.json'
      }]    
    }
  });

export default i18n;

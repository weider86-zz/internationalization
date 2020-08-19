import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import default_en_translation from './default-en.json';
import default_pt_br_translation from './default-pt-br.json';
import default_es_translation from './default-es.json';

i18next.use(initReactI18next).init({
  lng: 'default_en',
  fallbackLng: 'default_en',
  resources: {
    default_en: {
      common: default_en_translation,
    },
    default_pt_br: {
      common: default_pt_br_translation,
    },
    default_es: {
      common: default_es_translation,
    },
  },
});

export default i18next;

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { isDevelopmentEnvironment } from 'src/utils/node-env.utils';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: isDevelopmentEnvironment(),
        fallbackLng: 'en',
        backend: {
            loadPath: '/public/locales/{{lng}}/{{ns}}.json'
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

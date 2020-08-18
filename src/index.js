import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import { App } from "./components/App";
import ErrorBoundary from "./common/ErrorBoundary";
import "./assets/styles/main.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import default_en_translation from "./common/translations/default-en.json";
import default_pt_br_translation from "./common/translations/default-pt-br.json";
import default_es_translation from "./common/translations/default-es.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "default_en",
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

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './common/ErrorBoundary';
import {App} from './components/App';
import './common/translations/i18n';
import './assets/styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);

import React from 'react';

import {useTranslation} from 'react-i18next';

export const App = () => {
  const {t, i18n} = useTranslation();
  return <h1>{t('hello')}</h1>;
};

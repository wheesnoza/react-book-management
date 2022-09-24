import { I18nextProvider } from 'react-i18next';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Reset.css';
import i18n from './locales/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);

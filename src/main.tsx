import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Reset.css';
import i18n from './locales/i18n';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

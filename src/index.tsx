import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global-styles';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);

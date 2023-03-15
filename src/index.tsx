import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import GlobalStyle from './global-styles';

const queryClient = new QueryClient();

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
  </QueryClientProvider>,
);

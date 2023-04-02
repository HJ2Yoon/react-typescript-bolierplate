import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './global-styles';

const queryClient = new QueryClient();

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
);

import React from 'react';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import GlobalThemeProvider from './styles/GlobalThemeProvider';
// import { ReactQueryDevtools } from 'react-query/devtools';

export default function App() {
  return (
    <GlobalThemeProvider>
      <RouterProvider router={router} />
    </GlobalThemeProvider>
  );
}

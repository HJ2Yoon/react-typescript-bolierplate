import GlobalStyle from './global-styles';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

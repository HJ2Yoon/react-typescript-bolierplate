import router from './Router';
import { RouterProvider } from 'react-router-dom';
// import { ReactQueryDevtools } from 'react-query/devtools';

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

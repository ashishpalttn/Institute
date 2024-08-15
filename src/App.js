
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './config/routesConfig';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18/i18n';



function App() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
    <RouterProvider router={router}>
    </RouterProvider>
    </I18nextProvider>
  </div>
  );
}

export default App;

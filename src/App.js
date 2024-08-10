
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './config/routesConfig';


function App() {
  return (
    <div>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
  );
}

export default App;

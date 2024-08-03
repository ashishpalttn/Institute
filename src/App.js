// import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './shared-components/header';
// import Header from './shared-components/header/header2';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/routesConfig';
import HomePage from './pages/homePage/HomePage';
import AboutUs from './pages/aboutUsPage/AboutUsPage';


function App() {
  return (
    <div>
    <RouterProvider router={router}>
      {/* <DrawerAppBar/> */}
    </RouterProvider>
  </div>
  );
}

export default App;

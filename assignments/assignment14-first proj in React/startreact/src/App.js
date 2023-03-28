import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './components/Contact/Contact';


 function App() {
  let routes = createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:"Home" , element:<Home/>},
    {path:"About" , element:<About/>},
    {path:"Portofolio" , element:<Portofolio/>},
    {path:"Contact" , element:<Contact/>}
    ]},
    

  ])
  return <>
  <RouterProvider router={routes}/>
  </>
}

export default App;

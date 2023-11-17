import {createBrowserRouter} from 'react-router-dom';
import App from "../App"
import Panel from '../Componentes/Panel/Panel';
import Productos from '../Componentes/Productos/Productos';
import Login from '../Componentes/Login/Login';


export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Panel/>,},
            {path:"login",element:<Login/>,},
            {path:"/productos",element:<Productos/>,},
        ]
    },
      {
        path: '*',
        element: <h1>Not found</h1>,
      }
])
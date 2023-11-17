import {createBrowserRouter} from 'react-router-dom';
import App from "../App"
import { ProductView } from '../views/ProductView';
import { HistoryView } from '../views/HistoryView';
import Panel from '../Componentes/Panel/Panel';


export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Panel/>,},
            {path:"/login",element:<Login/>,},
        ]
    },
      {
        path: '*',
        element: <h1>Not found</h1>,
      }
])
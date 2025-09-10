import { createBrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Gallery from "./pages/GALERIA";
import Sobre from './pages/SOBRE';


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/GALERIA",
        element: <Gallery />,
    },
    {
        path: "/Sobre",
        element: <Sobre />
    },

    
])

export default router
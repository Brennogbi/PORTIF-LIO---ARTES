import { createBrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import Gallery from "./pages/GALERIA";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/GALERIA",
        element: <Gallery />,
    },

])

export default router
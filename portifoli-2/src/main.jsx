import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {GLOBALSTYLES} from './GLOBALSTYLES.js'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <GLOBALSTYLES />
    < RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routers/Routers.jsx'
import Authprovider from './Apps/Authprovider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)

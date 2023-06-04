import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import router from './Utils/route.utils'

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

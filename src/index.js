import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import router from './Utils/route.utils'
import { atom } from 'jotai'
const JWTAtom = atom('')

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


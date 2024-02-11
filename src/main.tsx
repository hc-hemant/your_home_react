import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import AuthRoute from './routes/auth';
import SignInRoute from './routes/signin';
import SignUpRoute from './routes/signup';
import GetStarted from './routes/get-started';
import AppWrapperRoute from './routes/app-wrapper';
import PropertiesRoute from './routes/properties';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="get-started"/>
      },
      {
        path: 'get-started',
        element: <GetStarted />
      },
      {
        path: 'a',
        element: <AppWrapperRoute />,
        children: [
          {
            path: '',
            element: <Navigate to="properties"/>
          },
          {
            path: 'properties',
            element: <PropertiesRoute />
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthRoute />,
    children: [
      {
        path:'',
        element: <Navigate to='signin'/>
      },
      {
        path: 'signin',
        element: <SignInRoute />
      },
      {
        path: 'signup',
        element: <SignUpRoute />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

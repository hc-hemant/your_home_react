import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import AppWrapperRoute from "./layout/app-wrapper";
import AuthWrapperRoute from "./layout/auth-wrapper";
import GetStarted from "./layout/get-started";
import PropertiesRoute from "./properties";
import SignInRoute from "./signin";
import SignUpRoute from "./signup";
import DashboardRoute from "./dashboard";
import PlansRoute from "./plans";
import BlogsRoute from "./blogs";
import ContactUsRoute from "./contact-us";

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
              id: 'properties',
              element: <PropertiesRoute />
            },
            {
              path: 'dashboard',
              id: 'dashboard',
              element: <DashboardRoute />
            },
            {
              path: 'plans',
              id: 'plans',
              element: <PlansRoute />
            },
            {
              path: 'blogs',
              id: 'blogs',
              element: <BlogsRoute />
            },
            {
              path: 'contact-us',
              id: 'contactUs',
              element: <ContactUsRoute />
            }
          ]
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthWrapperRoute />,
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

export default router;
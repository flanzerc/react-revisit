import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from "./routes/root.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginPage />
      }
      ,
      {
        path: "signup",
        element: <SignupPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/contact",
    element: <Root/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

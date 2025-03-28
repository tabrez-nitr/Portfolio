import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'



import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'


 const router = createBrowserRouter(
    [{
      path:'/',
      element:<Layout/>,

      children:[{
           path :'',
           element:<Home/>,
    },
    {
    path : 'skills',
    element: <Skills/>
    },
    {
      path : 'projects',
      element: <Projects/>
    },
    {
        path : 'contact',
        element: <Contact/>
    },
    {
       path : 'about',
       element: <About/>
    },
    {
      path:'contact',
      element:<Contact/>
    }
  ]
    }]
 )

createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)

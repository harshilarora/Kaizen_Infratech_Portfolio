import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import { ThemeProvider } from "next-themes";
import Services from './pages/Services/Services.jsx'
import Contact from './pages/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'Services',
        element: <Services />, 
      },
      {
        path: 'Contact',
        element: <Contact />,
      }
      // {
      //   path: 'contact',
      //   element: <Contact />,
      // },
      // {
      //   path: 'careers',
      //   element: <Careers />,
      // },
      // {
      //   path: 'projects',
      //   element: <Projects />,
      // },
      // {
      //   path: 'services',
      //   element: <Services />,
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}

  </React.StrictMode>
)

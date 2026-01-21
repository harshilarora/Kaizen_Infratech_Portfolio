import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import { ThemeProvider } from "next-themes";


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

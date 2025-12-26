import { use, useEffect, useState } from 'react'
import './styles/App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App

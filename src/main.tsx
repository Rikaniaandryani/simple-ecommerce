import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Pages/login.tsx'
import Register from './Components/Pages/register.tsx'
import ErrorPage from './Components/Pages/404.tsx'
import ProductPage from './Components/Pages/product.tsx'
import AuthGuard from './Helper/auth.guard.tsx'
import Profile from './Components/Pages/profile.tsx'
import { DetailProduct } from './Components/Pages/detailProduct.tsx'
// import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPage />
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: 'product', element: <ProductPage />
          },
          {
            path: 'product/:id/:name', element: <DetailProduct />
          }
        ]
      },
      {
        element: <AuthGuard />,
        children: [
          { path: 'profile', element: <Profile />}
        ]
      }
    ]
  },
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)

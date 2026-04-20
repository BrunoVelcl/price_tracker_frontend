import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './components/Login.tsx'
import NotFound from './pages/NotFound.tsx'
import Registration from './pages/Registration.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import LoremIpsum from './components/temp/LoremIpsum.tsx'

const router = createBrowserRouter([
    {
	path: "/",
	element: <App />,
	children: [
	    { path: "/login", element: <Login />},
	    { path: "/lorem", element: <LoremIpsum />},
	    { path: "*", element: <NotFound />},
	    { path: "/registration", element: <Registration />},
	]
    }])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

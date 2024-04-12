import { createBrowserRouter, RouterProvider } from "react-router-dom"
//pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Error from "./pages/Error"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "/create",
      element: <Create />,
      errorElement: <Error />
    },
    {
      path: "/update/:id",
      element: <Update />,
      errorElement: <Error />
    },
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App

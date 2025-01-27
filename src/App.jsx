import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home, About, Services } from "./Pages/index";
import RootLayout from "./Layout/RootLayout";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={Routers}></RouterProvider>;
}

export default App;

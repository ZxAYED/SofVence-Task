import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Components/HomePage/Home";
import ProductsPage from "../Components/ProductsPage/ProductsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
]);
export default routes;

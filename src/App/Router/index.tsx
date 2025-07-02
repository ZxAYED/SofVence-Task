import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Components/HomePage/Home";
import IndividualProduct from "../Components/IndividualProductPage/IndividualProduct";
import ProductsPage from "../Components/ProductsPage/ProductsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <IndividualProduct />,
      },
    ],
  },
]);

export default routes;

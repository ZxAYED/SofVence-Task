import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Components/HomePage/Home";
import IndividualProduct from "../Components/IndividualProductPage/IndividualProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", // default child route (Home)
        element: <Home />,
      },
      {
        path: "IndividualProduct", // matches /IndividualProduct
        element: <IndividualProduct />,
      },
    ],
  },
]);

export default routes;


      
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Components/HomePage/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default routes;

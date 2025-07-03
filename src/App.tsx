import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./App/Shared/NavMenu";
// import { Navbar } from "./App/Shared/NavMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

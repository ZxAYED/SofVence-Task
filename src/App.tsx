import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./App/Shared/Footer";
import Navbar from "./App/Shared/NavMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

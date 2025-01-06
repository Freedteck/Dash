import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;

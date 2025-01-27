import { Outlet } from "react-router-dom";
import Navbar from "../Navigetion/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;

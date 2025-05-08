import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading/Loading";

const Root = () => {
  // const {state}=useNavigation()
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main> <Outlet></Outlet></main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Root;

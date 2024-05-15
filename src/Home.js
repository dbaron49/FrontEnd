import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "./Componentes/ContentHeader";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import SidebarContainer from "./Componentes/SidebarContainer";
import Menu from "./Componentes/Menu";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Proyecto Final Desarrollo Full Stack"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3> Clientes </h3>
                    <p> &nbsp; </p>
                  </div>

                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>

                  <Link to={"/clientes"} className="small-box-footer">
                    Ver Clientes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3> Servicios </h3>
                    <p> &nbsp; </p>
                  </div>

                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>

                  <Link to={"/servicios"} className="small-box-footer">
                    Ver Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";

const MostrarServicios = () => {
  const [servicios, setServicios] = useState([]);

  const getServicios = async () => {
    const response = await APIInvoke.invokeGET("/api/servicios");
    setServicios(response.servicio);
  };

  useEffect(() => {
    getServicios();
  }, []);

  const EliminarServicios = async (e, idServicio) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/servicios/${idServicio}`);

    if (response.msg === "El servicio fue eliminado") {
      const msg = "El Servicio Fue Eliminado Correctamente";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      getServicios();
    } else {
      const msg = "El Servicio No Fue Eliminado Correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado De Servicios"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Servicios"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="">
                <Link
                  to={"/servicios/agregar"}
                  className="btn btn-block btn-primary btn-sm"
                >
                  <i className="fas fa-user"/>
                  &nbsp;
                  &nbsp;
                  Agregar
                </Link>
              </h3>

              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-times"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
              </div>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "15%" }}>Tipo</th>
                    <th style={{ width: "20%" }}>Encargado</th>
                    <th style={{ width: "15%" }}>Telefono Encargado</th>
                    <th style={{ width: "15%" }}>Horario</th>
                    <th style={{ width: "15%" }}>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {servicios.map((servicio, index) => (
                    <tr key={index}>
                      <td> {servicio.nombre}</td>
                      <td> {servicio.tipo}</td>
                      <td> {servicio.encargado}</td>
                      <td> {servicio.telefonoEncargado}</td>
                      <td> {servicio.horario}</td>
                      <td>
                        <Link
                          to={`/servicios/editar/${servicio._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-edit"/>
                          Editar
                        </Link>
                        <button
                          onClick={(e) => EliminarServicios(e, servicio._id)}
                          className="btn btn-sm btn-danger"
                        >
                           <i className="fas fa-trash-alt"/>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MostrarServicios;

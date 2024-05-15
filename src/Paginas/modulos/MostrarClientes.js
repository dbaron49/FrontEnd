import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const response = await APIInvoke.invokeGET("/api/clientes");
    setClientes(response.clientes);
  };

  useEffect(() => {
    getClientes();
  }, []);

  const EliminarClientes = async (e, idCliente) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

    if (response.msg === "El cliente fue eliminado") {
      const msg = "El Cliente Fue Eliminado Correctamente";
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
      getClientes();
    } else {
      const msg = "El Cliente No Fue Eliminado Correctamente";
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
          titulo={"Listado De Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="">
                <Link
                  to={"/clientes/agregar"}
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
                    <th style={{ width: "15%" }}>Nombres</th>
                    <th style={{ width: "15%" }}>Apellidos</th>
                    <th style={{ width: "15%" }}>Cedula</th>
                    <th style={{ width: "20%" }}>Correo</th>
                    <th style={{ width: "10%" }}>Telefono</th>
                    <th style={{ width: "15%" }}>Direccion</th>
                    <th style={{ width: "10%" }}>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {clientes.map((cliente, index) => (
                    <tr key={index}>
                      <td> {cliente.nombres}</td>
                      <td> {cliente.apellidos}</td>
                      <td> {cliente.cedula}</td>
                      <td> {cliente.correo}</td>
                      <td> {cliente.telefono}</td>
                      <td> {cliente.direccion}</td>
                      <td>
                        <Link
                          to={`/clientes/editar/${cliente._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-edit"/>
                          Editar
                        </Link>
                        &nbsp;
                        <button
                          onClick={(e) => EliminarClientes(e, cliente._id)}
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

export default MostrarClientes;

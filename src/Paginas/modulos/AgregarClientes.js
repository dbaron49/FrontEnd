import React, { useState, useEffect } from "react";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";
import SidebarContainer from "../../Componentes/SidebarContainer";
import { useNavigate } from "react-router-dom";

const AgregarClientes = () => {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    correo: "",
    telefono: "",
    direccion: "",
  });

  const { nombres, apellidos, cedula, correo, telefono, direccion } = clientes;

  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const CrearClientes = async () => {
    const data = {
      nombres: clientes.nombres,
      apellidos: clientes.apellidos,
      cedula: clientes.cedula,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };

    const response = await APIInvoke.invokePOST("/api/clientes", data);
    const idClientes = response._id;

    if (idClientes === "") {
      const msg = "Hubo Un Error Al Agregar Un Cliente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      navigate("/clientes");
      const msg = "El Cliente Fue Agregado Correctamente";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      setClientes({
        nombres: "",
        apellidos: "",
        cedula: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearClientes();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Clientes"}
          breadCrumb1={"Listado de Clientes"}
          breadCrumb2={"agregar"}
          ruta1={"/clientes/agregar"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tools"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-times" />
                </button>
                <button
                  type="button"
                  className="btn btn-tools"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items" />
                </button>
              </div>
            </div>

            <div className="card-body">
              <form onSubmit={onSubmit}>

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombres"> Nombres </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombres"
                      name="nombres"
                      placeholder="Ingrese los nombres del cliente"
                      value={nombres}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>


                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="apellidos"> Apellidos </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      placeholder="Ingrese los apellidos del cliente"
                      value={apellidos}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>


                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="cedula"> Cedula </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cedula"
                      name="cedula"
                      placeholder="Ingrese la cedula del cliente"
                      value={cedula}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>


                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="correo"> Correo </label>
                    <input
                      type="text"
                      className="form-control"
                      id="correo"
                      name="correo"
                      placeholder="Ingrese el correo del cliente"
                      value={correo}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>


                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="telefono"> Telefono </label>
                    <input
                      type="number"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      placeholder="Ingrese el telefono del cliente"
                      value={telefono}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>


                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="direccion"> Direccion </label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      placeholder="Ingrese la direccion del cliente"
                      value={direccion}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>

                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AgregarClientes;

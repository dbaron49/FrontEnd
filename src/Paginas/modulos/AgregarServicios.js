import React, { useState, useEffect } from "react";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";
import SidebarContainer from "../../Componentes/SidebarContainer";
import { useNavigate } from "react-router-dom";

const AgregarServicios = () => {
  const navigate = useNavigate();

  const [servicios, setServicios] = useState({
    nombre: "",
    tipo: "",
    encargado: "",
    telefonoEncargado: "",
    horario: ""
  });

  const { nombre, tipo, encargado, telefonoEncargado, horario } = servicios;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setServicios({
      ...servicios,
      [e.target.name]: e.target.value,
    });
  };

  const CrearServicios = async () => {
    const data = {
      nombre: servicios.nombre,
      tipo: servicios.tipo,
      encargado: servicios.encargado,
      telefonoEncargado: servicios.telefonoEncargado,
      horario: servicios.horario,
    };

    const response = await APIInvoke.invokePOST("/api/servicios", data);
    const idServicios = response._id;

    if (idServicios === "") {
      const msg = "Hubo Un Error Al Agregar Un Servicio";
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
      navigate("/servicios");
      const msg = "El Servicio Fue Agregado Correctamente";
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
      setServicios({
        nombre: "",
        tipo: "",
        encargado: "",
        telefonoEncargado: "",
        horario: ""
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearServicios();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Servicios"}
          breadCrumb1={"Listado de Servicios"}
          breadCrumb2={"agregar"}
          ruta1={"/servicios/agregar"}
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
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el nombre del servicio"
                      value={nombre}
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
                    <label htmlFor="tipo">Tipo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tipo"
                      name="tipo"
                      placeholder="Ingrese el tipo de servicio"
                      value={tipo}
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
                    <label htmlFor="encargado">Encargado</label>
                    <input
                      type="text"
                      className="form-control"
                      id="encargado"
                      name="encargado"
                      placeholder="Ingrese el encargado del servicio"
                      value={encargado}
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
                    <label htmlFor="telefonoEncargado">Telefono Encargado</label>
                    <input
                      type="number"
                      className="form-control"
                      id="telefonoEncargado"
                      name="telefonoEncargado"
                      placeholder="Ingrese el telefono del encargado"
                      value={telefonoEncargado}
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
                    <label htmlFor="horario">Horario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="horario"
                      name="horario"
                      placeholder="Ingrese el horario de atencion del servicio"
                      value={horario}
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
export default AgregarServicios;

import React, { useState, useEffect } from "react";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";
import SidebarContainer from "../../Componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";

const EditarClientes = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Funcion Actualizar
  const editarClientes = async (e) => {
    e.preventDefault();
    try {
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
          nombres: nombres,
          apellidos: apellidos,
          cedula: cedula,
          correo: correo,
          telefono: telefono,
          direccion: direccion,
        });
        swal({
          title: "Información",
          text: "El Cliente Se Ha Editado Correctamente.",
          icon: "success",
          button: "Aceptar",
        });
        navigate("/clientes");
      } catch (error) {
        swal({
          title: "Error",
          text: "Hubo Un Error Al Editar El Cliente.",
          icon: "error",
          button: "Aceptar",
        });
      }
    };

  useEffect(() => {
    getClientesId();
    //eslint-disable-next-line
  }, [id]);

  const getClientesId = async () => {
    const resultado = await APIInvoke.invokeGET(`/api/clientes/${id}`);
    setNombres(resultado.nombres);
    setApellidos(resultado.apellidos);
    setCedula(resultado.cedula);
    setCorreo(resultado.correo);
    setTelefono(resultado.telefono);
    setDireccion(resultado.direccion);
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Listado de Clientes"}
          breadCrumb2={"editar"}
          ruta1={"/clientes/editar"}
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
              <form onSubmit={editarClientes}>
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
                      onChange={(e) => setNombres(e.target.value)}
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
                      onChange={(e) => setApellidos(e.target.value)}
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
                      onChange={(e) => setCedula(e.target.value)}
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
                      onChange={(e) => setCorreo(e.target.value)}
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
                      onChange={(e) => setTelefono(e.target.value)}
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
                      onChange={(e) => setDireccion(e.target.value)}
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
                    Editar
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

export default EditarClientes;

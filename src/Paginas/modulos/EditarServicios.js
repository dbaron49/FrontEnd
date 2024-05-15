import React, { useState, useEffect } from "react";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import APIInvoke from "../../Config/APIInvoke";
import swal from "sweetalert";
import SidebarContainer from "../../Componentes/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";

const EditarServicios = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [encargado, setEncargado] = useState("");
  const [telefonoEncargado, setTelefono] = useState("");
  const [horario, setHorario] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Funcion Actualizar
  const editarServicios = async (e) => {
    e.preventDefault();
    try {
        await APIInvoke.invokePUT(`/api/servicios/${id}`, {
          nombre: nombre,
          tipo: tipo,
          encargado: encargado,
          telefonoEncargado: telefonoEncargado,
          horario: horario,
        });
        swal({
          title: "Información",
          text: "El Servicio Se Ha Editado Correctamente.",
          icon: "success",
          button: "Aceptar",
        });
        navigate("/servicios");
      } catch (error) {
        swal({
          title: "Error",
          text: "Hubo Un Error Al Editar El Servicio.",
          icon: "error",
          button: "Aceptar",
        });
      }
    };

  useEffect(() => {
    getServiciosId();
    //eslint-disable-next-line
  }, [id]);

  const getServiciosId = async () => {
    const resultado = await APIInvoke.invokeGET(`/api/servicios/${id}`);
    setNombre(resultado.nombre);
    setTipo(resultado.tipo);
    setEncargado(resultado.encargado);
    setTelefono(resultado.telefonoEncargado);
    setHorario(resultado.horario);
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
              <form onSubmit={editarServicios}>

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
                      onChange={(e) => setNombre(e.target.value)}
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
                      onChange={(e) => setTipo(e.target.value)}
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
                      onChange={(e) => setEncargado(e.target.value)}
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
                    <label htmlFor="horario">Horario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="horario"
                      name="horario"
                      placeholder="Ingrese el horario de atencion del servicio"
                      value={horario}
                      onChange={(e) => setHorario(e.target.value)}
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

export default EditarServicios;

import React, { Fragment }  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Paginas/auth/Login';
import Registro from './Paginas/auth/Registro';
import Home from "./Home";
import AgregarClientes from "./Paginas/modulos/AgregarClientes";
import MostrarClientes from "./Paginas/modulos/MostrarClientes";
import MostrarServicios from "./Paginas/modulos/MostrarServicios";
import AgregarServicios from "./Paginas/modulos/AgregarServicios";
import EditarClientes from "./Paginas/modulos/EditarClientes";
import EditarServicios from "./Paginas/modulos/EditarServicios";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element = {<Login/>}></Route>
            <Route path="/Registro" exact element = {<Registro/>}></Route>
            <Route path="/Home" exact element = {<Home/>}></Route>
            <Route path="/clientes" exact element = {< MostrarClientes />}></Route>
            <Route path="/clientes/agregar" exact element = {< AgregarClientes />}></Route>
            <Route path="/clientes/editar/:id" exact element = {< EditarClientes />}></Route>
            <Route path="/servicios" exact element = {< MostrarServicios />}></Route>
            <Route path="/servicios/agregar" exact element = {< AgregarServicios />}></Route>
            <Route path="/servicios/editar/:id" exact element = {< EditarServicios />}></Route>
          </Routes>
        </Router>
      </Fragment>
      
    </div>
  );
}

export default App;

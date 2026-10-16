import React, { Component } from "react";
import CarService from "../services/CarService";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  service = new CarService();
  state = { cars: [] };
  loadCar = async () => {
    let datos = await this.service.getCars();
    this.setState({ cars: datos });
  };
  componentDidMount = async () => {
    await this.loadCar();
  };
  render() {
    return (
      <div>
        <button className="mb-4 inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          <NavLink to="/crear">Crear un nuevo coche</NavLink>
        </button>
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Imagen</th>
              <th className="border px-4 py-2">Marca</th>
              <th className="border px-4 py-2">Modelo</th>
              <th className="border px-4 py-2">Conductor</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((c, key) => {
              return (
                <tr key={key} className="hover:bg-gray-50">
                  <td>
                    <img
                      src={c.imagen}
                      alt="foto coche"
                      style={{ height: "128px", width: "128px" }}
                    ></img>
                  </td>
                  <td className="border px-4 py-2">{c.marca}</td>
                  <td className="border px-4 py-2">{c.modelo}</td>
                  <td className="border px-4 py-2">{c.conductor}</td>
                  <td className="border px-4 py-2">
                    <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
                      <NavLink to={"/edit/" + c.idCoche}>
                        Editar
                      </NavLink>
                    </button>
                    <button className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

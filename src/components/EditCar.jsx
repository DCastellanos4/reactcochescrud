import React, { Component } from "react";
import { NavLink, Navigate } from "react-router-dom";
import CarService from "../services/CarService";
export default class EditCar extends Component {
  marca = React.createRef();
  modelo = React.createRef();
  conductor = React.createRef();
  imagen = React.createRef();

  s = new CarService();
  state = { car: null, status: false };
  getCar = async () => {
    let car = await this.s.getCarsById(this.props.id);
    this.setState({ car: car, status: false });
  };
  componentDidMount = async () => {
    await this.getCar();
  };
  editCar = async (event) => {
    event.preventDefault();
    let car = {
      idCoche: this.props.id,
      marca: this.marca.current.value,
      modelo: this.modelo.current.value,
      conductor: this.conductor.current.value,
      imagen: this.imagen.current.value,
    };
    await this.s.updateCar(car);
    this.setState({ status: true });
    console.log(car);
  };
  render() {
    if (this.state.car) {
      if (this.state.status == true) {
        return <Navigate to="/" />;
      }
      return (
        <div>
          <h1>Edicion de Bólidos</h1>
          {this.state.car && (
            <table className="w-full border-collapse text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Imagen</th>
                  <th className="border px-4 py-2">Marca</th>
                  <th className="border px-4 py-2">Modelo</th>
                  <th className="border px-4 py-2">Conductor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td>
                    <img
                      src={this.state.car.imagen}
                      alt="foto coche"
                      style={{ height: "128px", width: "128px" }}
                    ></img>
                  </td>
                  <td className="border px-4 py-2">{this.state.car.marca}</td>
                  <td className="border px-4 py-2">{this.state.car.modelo}</td>
                  <td className="border px-4 py-2">
                    {this.state.car.conductor}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <form className="mt-6 max-w-md space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="space-y-2">
              <input
                type="text"
                ref={this.marca}
                defaultValue={this.state.car.marca}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              ></input>
              <input
                type="text"
                ref={this.modelo}
                defaultValue={this.state.car.modelo}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              ></input>
              <input
                type="text"
                ref={this.conductor}
                defaultValue={this.state.car.conductor}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              ></input>
              <input
                type="text"
                ref={this.imagen}
                placeholder="URL"
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              ></input>
            </div>
            <button
              onClick={this.editCar}
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
          <button className="mt-4 rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
            <NavLink to="/">Volver</NavLink>
          </button>
        </div>
      );
    } else {
      <h1>No encontramos el coche buscado</h1>
    }
  }
}

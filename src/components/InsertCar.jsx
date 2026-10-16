import React, { Component } from "react";
import { NavLink, Navigate } from "react-router-dom";
import CarService from "../services/CarService";
export default class InsertCar extends Component {
  state = { status: true };
  s = new CarService();
  url = React.createRef();
  marca = React.createRef();
  modelo = React.createRef();
  conductor = React.createRef();
  insertCar = async (event) => {
    event.preventDefault();
    let url = this.url.current.value;
    let marca = this.marca.current.value;
    let modelo = this.modelo.current.value;
    let conductor = this.conductor.current.value;
    let car = {
      imagen: url,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
    };
    console.log(car);
    await this.s.insertCar(car);
    this.setState({ status: false });
  };
  render() {
    if (this.state.status == false) {
      return <Navigate to="/" />;
    } else {
      return (
        <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow">
          <h1 className="mb-6 text-2xl font-bold">
            Formulario de creación de un nuevo coche
          </h1>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block font-medium">Marca</label>
              <input
                type="text"
                ref={this.marca}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Modelo</label>
              <input
                type="text"
                ref={this.modelo}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Conductor</label>
              <input
                type="text"
                ref={this.conductor}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">URL imagen</label>
              <input
                type="text"
                ref={this.url}
                className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={this.insertCar}
              className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            >
              Enviar
            </button>
            <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
              <NavLink to="/">Volver</NavLink>
            </button>
          </form>
        </div>
      );
    }
  }
}

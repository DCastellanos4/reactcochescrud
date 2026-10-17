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
        <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="bg-slate-950 px-6 py-8 text-white sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                Garaje · Editar vehículo
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Actualiza tu coche<span className="text-orange-400">.</span>
              </h1>
              <p className="mt-2 text-slate-300">
                Revisa los datos y guarda los cambios.
              </p>
            </div>
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={this.state.car.imagen}
                  alt={`${this.state.car.marca} ${this.state.car.modelo}`}
                  className="h-64 w-full object-cover lg:h-full lg:min-h-96"
                />
                <div className="bg-slate-900 px-5 py-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    {this.state.car.marca}
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {this.state.car.modelo}
                  </p>
                </div>
              </div>
              <form className="space-y-5">
                <div>
                  <label htmlFor="marca" className="mb-2 block text-sm font-semibold text-slate-700">Marca</label>
              <input
                type="text"
                id="marca"
                ref={this.marca}
                defaultValue={this.state.car.marca}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              ></input>
                </div>
                <div>
                  <label htmlFor="modelo" className="mb-2 block text-sm font-semibold text-slate-700">Modelo</label>
              <input
                type="text"
                id="modelo"
                ref={this.modelo}
                defaultValue={this.state.car.modelo}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              ></input>
                </div>
                <div>
                  <label htmlFor="conductor" className="mb-2 block text-sm font-semibold text-slate-700">Conductor</label>
              <input
                type="text"
                id="conductor"
                ref={this.conductor}
                defaultValue={this.state.car.conductor}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              ></input>
                </div>
                <div>
                  <label htmlFor="imagen" className="mb-2 block text-sm font-semibold text-slate-700">URL de la imagen</label>
              <input
                type="text"
                id="imagen"
                ref={this.imagen}
                placeholder="URL"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              ></input>
                </div>
                <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                  <NavLink
                    to="/"
                    className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Volver al garaje
                  </NavLink>
                  <button
                    onClick={this.editCar}
                    type="submit"
                    className="flex-1 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-200"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      );
    } else {
      return (
        <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Cargando coche...
            </h1>
            <p className="mt-2 text-slate-500">
              Estamos buscando sus datos para editarlo.
            </p>
          </section>
        </main>
      );
    }
  }
}

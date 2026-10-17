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
    let car = {
      imagen: this.url.current.value,
      marca: this.marca.current.value,
      modelo: this.modelo.current.value,
      conductor: this.conductor.current.value,
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
        <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="bg-slate-950 px-6 py-8 text-white sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
                Garaje · Nuevo vehículo
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Añade un coche<span className="text-orange-400">.</span>
              </h1>
              <p className="mt-2 text-slate-300">
                Completa los datos para incorporar uno a tu colección.
              </p>
            </div>
            <form className="space-y-5 p-6 sm:p-10">
              <div>
              <label htmlFor="marca" className="mb-2 block text-sm font-semibold text-slate-700">Marca</label>
              <input
                type="text"
                id="marca"
                ref={this.marca}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label htmlFor="modelo" className="mb-2 block text-sm font-semibold text-slate-700">Modelo</label>
              <input
                type="text"
                id="modelo"
                ref={this.modelo}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label htmlFor="conductor" className="mb-2 block text-sm font-semibold text-slate-700">Conductor</label>
              <input
                type="text"
                id="conductor"
                ref={this.conductor}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label htmlFor="imagen" className="mb-2 block text-sm font-semibold text-slate-700">URL de la imagen</label>
              <input
                type="text"
                id="imagen"
                ref={this.url}
                placeholder="https://ejemplo.com/coche.jpg"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <NavLink
                  to="/"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Volver al garaje
                </NavLink>
                <button
                  onClick={this.insertCar}
                  className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Guardar coche
                </button>
              </div>
            </form>
          </section>
        </main>
      );
    }
  }
}

import React, { Component } from "react";
import CarService from "../services/CarService";
import { NavLink } from "react-router-dom";
import DeleteCar from "./DeleteCar";
export default class Home extends Component {
  service = new CarService();
  state = { cars: [], selected: null };
  loadCar = async () => {
    let datos = await this.service.getCars();
    this.setState({ cars: datos });
  };
  componentDidMount = async () => {
    await this.loadCar();
  };
  unloadModal = () => {
    this.setState({ selected: null });
  };
  render() {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {this.state.selected && (
          <DeleteCar
            id={this.state.selected.idCoche}
            unloadModal={this.unloadModal}
            loadCar={this.loadCar}
          />
        )}
        <header className="mb-10 flex flex-col gap-6 rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
              Garaje · Colección personal
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Tus coches<span className="text-orange-400">.</span>
            </h1>
            <p className="mt-3 max-w-lg text-slate-300">
              Gestiona tu colección en un solo lugar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">
              {this.state.cars.length}{" "}
              {this.state.cars.length === 1 ? "vehículo" : "vehículos"}
            </span>
            <NavLink
              to="/crear"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              + Añadir coche
            </NavLink>
          </div>
        </header>

        {this.state.cars.length === 0 ? (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-800">
              Todavía no hay coches en tu garaje
            </p>
            <p className="mt-2 text-slate-500">
              Añade el primero para empezar tu colección.
            </p>
          </section>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {this.state.cars.map((c) => (
              <article
                key={c.idCoche}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={c.imagen}
                    alt={`${c.marca} ${c.modelo}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    #{c.idCoche}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                    {c.marca}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    {c.modelo}
                  </h2>
                  <p className="mt-3 text-sm text-slate-500">
                    Conductor{" "}
                    <span className="font-semibold text-slate-700">
                      {c.conductor}
                    </span>
                  </p>
                  <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
                    <NavLink
                      to={"/edit/" + c.idCoche}
                      className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    >
                      Editar
                    </NavLink>
                    <button
                      onClick={() => this.setState({ selected: c })}
                      className="flex-1 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    );
  }
}

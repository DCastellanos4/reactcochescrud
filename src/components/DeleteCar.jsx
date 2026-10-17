import React, { Component } from "react";
import CarService from "../services/CarService";
import { Navigate } from "react-router-dom";
export default class DeleteCar extends Component {
  s = new CarService();
  state = { status: false };
  deleteCar = async () => {
    console.log(this.props.id);
    await this.s.deleteCar(this.props.id);
    this.props.loadCar()
    this.props.unloadModal()
    this.setState({ status: true });
  };
  render() {
    if (this.props.id) {
      if (this.state.status == true) {
        <Navigate to="/" />;
      }
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-car-title"
            className="w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="bg-slate-950 px-6 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Confirmación
              </p>
              <h2 id="delete-car-title" className="mt-2 text-2xl font-bold">
                ¿Eliminar este coche?
              </h2>
            </div>
            <div className="p-6">
              <p className="text-slate-600">
                Se eliminará el vehículo{" "}
                <span className="font-bold text-slate-900">
                  #{this.props.id}
                </span>{" "}
                de tu garaje. Esta acción no se puede deshacer.
              </p>
              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={this.props.unloadModal}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={this.deleteCar}
                  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
                >
                  Sí, eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

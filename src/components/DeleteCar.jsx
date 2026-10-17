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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-car-title"
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 id="delete-car-title" className="mb-4 text-lg font-semibold">
              ¿Quieres eliminar este coche?
            </h2>
            <p className="mb-6 text-gray-600">Coche: {this.props.id}</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={this.props.unloadModal}
                className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
              >
                No
              </button>
              <button
                onClick={this.deleteCar}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Sí
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

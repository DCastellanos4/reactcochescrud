import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class EditCar extends Component {
  render() {
    return (
      <div>
        <button className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
          <NavLink to="/">Volver</NavLink>
        </button>
        {this.props.id}
      </div>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import InsertCar from "./InsertCar";
import EditCar from "./EditCar";
export default class Router extends Component {
  render() {
    function EditCarElement() {
      let { id } = useParams();
      return <EditCar id={id} />;
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/crear" element={<InsertCar />}></Route>
          <Route path="/edit/:id" element={<EditCarElement />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

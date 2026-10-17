import Global from "../Global";
import axios from "axios";
export default class CarService {
  url = Global.urlApi;
  getCars = async () => {
    let response = await axios.get(this.url + "api/coches");
    return response.data;
  };
  insertCar = async (car) => {
    let response = await axios.post(this.url + "api/coches/InsertCoche", car);
    return response.data;
  };
  getCarsById = async (id) => {
    let response = await axios.get(this.url + "api/coches/findcoche/" + id);
    return response.data;
  };
  updateCar = async (car) => {
    let response = await axios.put(this.url + "api/coches/updatecoche", car);
    return response.data;
  };
  deleteCar = async (id) => {
    let response = await axios.delete(
      this.url + "api/coches/deletecoche/" + id,
    );
    return response.data;
  };
}

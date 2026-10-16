import Global from "../Global";
import axios from "axios";
export default class CarService {
  getCars = async () => {
    let url = Global.urlApi;
    let response = await axios.get(url + "api/coches");
    return response.data;
  };
  insertCar = async (car) => {
    let url = Global.urlApi;
    let response = await axios.post(url + "api/coches/InsertCoche", car);
    return response.data;
  };
}

import axios from "axios";

//biblio axios para requisições http
const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;

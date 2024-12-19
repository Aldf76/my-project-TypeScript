import axios from "axios";
 
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // API mock
});
 
export default api;
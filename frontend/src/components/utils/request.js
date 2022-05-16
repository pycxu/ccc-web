import axios from "axios"

axios.defaults.headers.post['Content-Type'] = "application/json";
const request = axios.create({
  baseURL: "api/v1"}
)

export default request;
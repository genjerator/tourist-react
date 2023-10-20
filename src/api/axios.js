import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:88/api",
    withCredentials: true
})

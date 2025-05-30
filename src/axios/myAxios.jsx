import axios from "axios";

const MyAxios=axios.create({
    baseUrl: "http://localhost:8000/api",
    withCredentials:false,
});

export default MyAxios;
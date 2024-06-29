import axios from "axios";

export default axios.create({
    baseURL:"https://find-job-pro.up.railway.app/api",
    withCredentials: true
}); 

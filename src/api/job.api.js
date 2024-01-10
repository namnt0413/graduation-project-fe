import axios from "../lib/axios";

export const getAllJobsApi = async () => {
    return axios.get(`/api/job/get-all-jobs`)
} 

export const getJobDetailApi = async (jobId) => {
    return axios.get(`/api/job/detail/${jobId}`)
} 


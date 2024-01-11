import axios from "../lib/axios";

export const getAllCompaniesApi = async () => {
    return axios.get(`/api/company/get-all-companies`)
} 

export const getCompanyDetailApi = async (jobId) => {
    return axios.get(`/api/company/detail/${jobId}`)
} 


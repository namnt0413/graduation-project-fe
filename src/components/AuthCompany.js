import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCompany(){
    const navigate = useNavigate();

    const companyGetToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const companyToken = JSON.parse(tokenString);
        return companyToken;
    }

    const getCompany = () =>{
        const companyString = sessionStorage.getItem('company');
        const companyInfo = JSON.parse(companyString);
        return companyInfo;
    }

    const [token,setToken] = useState(companyGetToken());
    const [company,setCompany] = useState(getCompany());

    const saveToken = (company,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('company',JSON.stringify(company));

        setToken(token);
        setCompany(company);
        navigate('/company-home');
    }

    const companyHttp = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    return {
        companySetToken:saveToken,
        token,
        company,
        companyGetToken,
        companyHttp,
    }
}

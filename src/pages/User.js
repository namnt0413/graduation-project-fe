import { useEffect, useState } from 'react';
import AuthUser from '../components/AuthUser';
import Layout from "../layouts/Layout";

export default function User() {
    const {http} = AuthUser();
    const [userInfo,setUserInfo] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = async () =>{
        try {
            await http.post('/me').then((res)=>{
            setUserInfo(res.data);
        });
        } catch (error) {
            console.log(error)
        }
    }

    function renderElement(){
        if(userInfo){
            return <div>
                <h4>Name</h4>
                <p>{userInfo.name}</p>
                <h4>Email</h4>
                <p>{userInfo.email}</p>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }
    const UserContent = (
        <div>
            <h1 className='mb-4 mt-4'>User Info page</h1>
            { renderElement() }
        </div>
    );

  return <Layout page={UserContent} />;

}


import { useEffect, useState } from 'react';
import AuthUser from '../components/AuthUser';
import Layout from "../layouts/Layout";
import { useSelector } from "react-redux";

export default function User() {
    // const {http} = AuthUser();
    // const [userInfo,setUserInfo] = useState('');
    const user = useSelector((state)=> state.user.value);

    // useEffect(()=>{
    //     fetchUserDetail();
    // },[]);

    // const fetchUserDetail = async () =>{
    //     try {
    //         await http.post('/me').then((res)=>{
    //         setUserInfo(res.data);
    //     });
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    function renderElement(){
        if(user){
            return <div>
                <h4>Name</h4>
                <p>{user.name}</p>
                <h4>Email</h4>
                <p>{user.email}</p>
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


import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const [success]=searchParams.get("success");
    const [orderId]=searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate= useNavigate();
    console.log(success,orderId);

    const verifyPayments= async() =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        console.log(response);
        if(!response.data.success){
            navigate("/myorders");
        }
        else{

            navigate("/");
        }
    }


    useEffect(()=>{
        verifyPayments();  
    },[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify
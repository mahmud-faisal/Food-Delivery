import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {assets} from "../../assets/admin_assets"
// Add toast
const Order = ({url}) => {
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async()=>{
    const response = await axios.get(url+"/api/order/list");
    
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      // add toast for error
    }
  }

const statusHadler=async(event,orderId)=>{
 response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value});

 if(response.data.success){
  await fetchAllOrders();
 }

}

useEffect(()=>{
  fetchAllOrders();
},[])

  return (
    <div className='order add'>
      <h3 className="">Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>{
          <div key={index} className="order-item">
            <img src="" alt="" className="" />
          
            <div className="">
            <p className="order-item-food">
            {order.items.map((item,index)=>{
              if(index===order.items.length-1){
                return item.name+ " X " + item.quantity;
              }
              else{
                return item.name +" X "+item.quantity + ", ";
              }
            })}              
            </p>

            <p className="order-item-name">
              {order.address.firstName+" "+order.address.lastName}
            </p>
            <div className="order-item-address">
              <p className="">{order.address.street+","}</p>
              <p className="">{order.address.city+"," +order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
            </div>
            <p className="order-item-phone">
              {order.address.phone}
            </p>
            </div>
            <p className="">Items:{orders.items.length}</p>
            <p className="">${orders.amount}</p>
            <select name="" id="" onChange={(event)=>statusHadler(event,order._id)} value ={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          
        })}
      </div>
    </div>
  )
}

export default Order
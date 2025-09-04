import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Delivery = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [deliveryCharge, setDeliveryCharge] = useState(0)
  const subTotal = getTotalCartAmount()
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  useEffect(() => {
    if (subTotal > 0) setDeliveryCharge(2)
    else setDeliveryCharge(0)
  }, [subTotal])

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []

    food_list.forEach((item) => {
      console.log("Item id:",item._id);
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item }
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryCharge
    }

    try {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      console.log(response)
      if (response.data.success === true) {
        const { session_url } = response.data
        window.location.replace(session_url)
      } else {
        alert("Error placing order")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])

  return (
    <div className='w-[1280px] mx-auto my-10'>
      {/* ✅ Single form wrapping both sections */}
      <form className="flex justify-between" onSubmit={placeOrder}>
        
        {/* Left: Delivery Information */}
        <div className="left w-4/10">
          <h3 className="text-2xl font-bold mb-4">Delivery Information</h3>
          <div className='flex flex-col gap-4'>
            <div className="flex gap-2">
              <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='First Name' />
              <input type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='Last Name' />
            </div>
            <input type="email" name="email" onChange={onChangeHandler} value={data.email} className="w-full border border-gray-500 rounded-lg p-1" placeholder='Email Address' />
            <input type="phone" name="phone" onChange={onChangeHandler} value={data.phone} className="border border-gray-500 rounded-lg p-1 w-full" placeholder='Phone' />
            <input type="text" name="street" onChange={onChangeHandler} value={data.street} className="border border-gray-500 rounded-lg p-1 w-full" placeholder='Street' />
            <div className="flex gap-2">
              <input type="text" name="city" onChange={onChangeHandler} value={data.city} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='City' />
              <input type="text" name="state" onChange={onChangeHandler} value={data.state} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='State' />
            </div>
            <div className="flex gap-2">
              <input type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='Zip code' />
              <input type="text" name="country" onChange={onChangeHandler} value={data.country} className="border border-gray-500 rounded-lg p-1 w-1/2" placeholder='Country' />
            </div>
          </div>
        </div>

        {/* Right: Cart Total */}
        <div className="right w-3/10">
          <div className="cart-total">
            <h3 className="font-bold text-xl my-2">Cart Total</h3>
            <div className="flex flex-col gap-4">
              <div className="sub-total flex justify-between w-full">
                <p>Subtotal</p><p>${subTotal}</p>
              </div>
              <div className="Delivery Fee flex justify-between w-full">
                <p>Delivery</p><p>${deliveryCharge}</p>
              </div>
              <div className="Total flex justify-between w-full">
                <p>Total</p><p>${subTotal + deliveryCharge}</p>
              </div>
            </div>

            {/* Submit button inside form */}
            <button 
              type="submit" 
              className="w-full text-white bg-primary-color text-center rounded-lg py-2 mt-4 cursor-pointer"
            >
              Proceed To Payment
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Delivery

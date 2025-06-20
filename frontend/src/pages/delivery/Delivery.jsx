import React from 'react'
import CostCal from '../../components/cart/CostCal';

const Delivery = () => {
  return (
        <div className='w-[1280px] mx-auto flex justify-between my-10'>
        <div className="left w-4/10">
            <h3 className="text-2xl font-bold mb-4">Delivery Information</h3>
            <form action="" className='flex flex-col gap-4'>
                <div className="flex gap-2">
                    <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='First Name' />
                    <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='Last Name' />
                </div>
                <div className="">
                <input type="email" name="" id="" className="w-full border  border-gray-500 rounded-lg p-1" placeholder='Email Address' />
                </div>
                <div className="">
                <input type="phone" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-full" placeholder='Phone' />
                </div>
                <div className="">
                <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-full" placeholder='Street' />
                </div>
                <div className="flex gap-2">
                <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='City' />
                <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='State' />
                </div>
                <div className="flex gap-2">
                <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='Zip code' />
                <input type="text" name="" id="" className="border  border-gray-500 rounded-lg p-1 w-1/2" placeholder='Country' />
                </div>
            </form>
        </div>
        <div className="right w-3/10">
        <CostCal />
            </div>
    </div>
  )
}

export default Delivery;
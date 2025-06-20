import React from 'react'

const Promo = () => {
  return (
   <div className="flex justify-between items-center">
     <div className="promo-code">
    <p className="my-3">If you have a promo code,Enter it here</p>
    <div className="flex">
        <input type="text" name="" id="" className='bg-gray-300 focus:border-none px-4' placeholder='promo code' />
        <p className="text-white bg-black px-6 py-2 cursor-pointer">Submit</p>
    </div>
</div>
   </div>
  )
}

export default Promo
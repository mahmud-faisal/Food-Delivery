import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-order max-w-[1280px] w-full mx-auto px-4">
      <h2 className="h3 text-2xl font-bold mb-6">My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div
            key={index}
            className="my-orders-order w-full grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 border rounded-xl shadow-sm p-4 bg-white hover:shadow-md transition my-4"
          >
            <img src={assets.parcel_icon} alt="" className="w-12 h-12" />

            <p className="text-gray-700">
              {order.items.map((item, idx) =>
                idx === order.items.length - 1
                  ? `${item.name} x ${item.quantity}`
                  : `${item.name} x ${item.quantity}, `
              )}
            </p>

            <p className="font-semibold">${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p className="flex items-center gap-2">
              <span className="text-primary-color text-xl">&#9679;</span>
              <b>{order.status}</b>
            </p>

            <button
              className="bg-[#eb24003d] py-2 px-4 rounded cursor-pointer hover:bg-[#eb240059] transition"
              onClick={fetchOrders}
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

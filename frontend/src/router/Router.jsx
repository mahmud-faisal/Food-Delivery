import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from '../pages/home/Home'
import Cart from "../pages/cart/Cart";
import Delivery from "../pages/delivery/Delivery";
import Verify from "../pages/verify/Verify";
import MyOrders from "../pages/myorders/MyOrders";
import TopDish from "../components/home/TopDish";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
          { index: true, Component: Home },
          // { index: true, Component: TopDish },
          { path: "cart", Component: Cart },
          { path: "delivery", Component: Delivery },
          { path: "verify", Component: Verify },
          { path: "myorders", Component: MyOrders },
        ]
    }
  ]);

export default router;
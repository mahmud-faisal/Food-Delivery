import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from '../pages/home/Home'
import Cart from "../pages/cart/Cart";
import Delivery from "../pages/delivery/Delivery";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
          { index: true, Component: Home },
          { path: "cart", Component: Cart },
          { path: "delivery", Component: Delivery },
        ]
    }
  ]);

export default router;
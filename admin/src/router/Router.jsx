import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Add from "../pages/add/Add";
import List from "../pages/list/List";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "add", 
          element: <Add />
        },
        {
          path: "items", 
          element: <List />
        },
        // You can add more child routes here
      ]
    },
  ]);

  export default router;
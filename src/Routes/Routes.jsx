import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/> 
      },
      {
        path: "/login",
        element: <Login/> 
      }
    ]
  },
]);
export default router;
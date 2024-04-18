
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import AnimalCaretaker from "../Pages/AnimalCaretaker";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/AnimalCaretaker", element: <AnimalCaretaker/> },
        {path: "/", element: <Home/>},
       
       
        

      
      ]
    },
  ]);

  export  default router;

  
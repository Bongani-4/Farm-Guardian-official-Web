
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import AnimalCaretaker from "../Pages/AnimalCaretaker";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/AnimalCaretaker", element: <AnimalCaretaker /> },
      { path: "/", element: <AnimalCaretaker /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> }





    ]
  },
]);

export default router;


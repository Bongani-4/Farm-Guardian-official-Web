
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import AnimalCaretaker from "../Pages/AnimalCaretaker";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Login from "../Pages/Login"
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../Pages/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AnimalCaretaker", element: <AnimalCaretaker /> },
      { path: "/", element: <AnimalCaretaker /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "edit-job/:id", element: <UpdateJob />, loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`) }





    ]
  },
  {
    path: "/login", element: <Login />

  }, {
    path: "/job/:id", element: <JobDetails />
  }
]);


export default router;


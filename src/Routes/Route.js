import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ServicePage from "../Pages/ServicePage/ServicePage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register.js/Register";
import UserReviews from "../Pages/UserReviews/UserReviews";
import PrivateRoute from "../Routes/PrivateRoute";
import AddServices from "../Pages/AddServices/AddServices";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
        loader: () => fetch("https://chitromaya-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://chitromaya-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userReviews",
        element: (
          <PrivateRoute>
            <UserReviews></UserReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path: "*",
        element: (
            <NotFound></NotFound>
        ),
      },
    ],
  },
]);

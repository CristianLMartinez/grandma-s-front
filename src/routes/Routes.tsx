import { createBrowserRouter } from "react-router-dom";
import Page404 from "../component/Page404";
import Landing from "../pages/Landing";
import { ROUTES } from "./schema";
import RegisterClientForm from "../component/RegisterClientForm";
import Layout from "../component/Layout";
import Client from "../pages/Client";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: ROUTES.INDEX, element: <Landing /> },
      { path: ROUTES.CLIENT, element: <Client /> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

//     path: "/",
//     element: <HomeLayout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "menu", element: <Menu /> },
//       { path: "book", element: <Booking /> },
//       { path: "events", element: <Events /> },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },

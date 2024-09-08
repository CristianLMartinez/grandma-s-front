import { createBrowserRouter } from "react-router-dom";
import Page404 from "./Page404";
import Landing from "../pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
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

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/login/Login";
import MyBookings from "./components/myBookings/MyBookings";
import CreateUser from "./components/createUser/CreateUser";
import AllUsers from "./components/getAndUpdateUsers/AllUsers";
import Settings from "./components/settings/Settings";
import Root from "./components/root/Root";

import "./index.css";
import store from "./redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "myBooking",
        element: <MyBookings />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createUser",
        element: <CreateUser />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

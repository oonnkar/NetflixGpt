import React from "react";
import SignIn from "./SignIn";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./Header";

const AppLayout = () => (
  <div>
    <Header></Header>
    <Outlet></Outlet>
  </div>
);

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout></AppLayout>,
      children: [
        {
          index: true,
          element: <SignIn></SignIn>,
        },
        {
          path: "browse",
          element: <Browse></Browse>,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
};

export default Body;

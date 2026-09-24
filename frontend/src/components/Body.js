import React from "react";
import SignIn from "./SignIn";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn></SignIn>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);
  
  return (
    <div>
      <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import Applied_Jobs from "./components/Applied_Jobs/Applied_Jobs.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import JobDetils from "./components/JobDetails/JobDetils.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path:'/',
      element:<Home></Home>
    },
    {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/jobs',
        element:<Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <Applied_Jobs></Applied_Jobs>,
        loader:()=>fetch('../public/jobs.json')
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      
      {
        path: '/job/:id',
        element: <JobDetils></JobDetils>,
        loader:()=>fetch('../public/jobs.json')
        
}
      
  ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Ask from "../pages/Ask";
import DooDoo from "../pages/Do";
import Profile from "../pages/Profile";



const App = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "/ask",
        element: <Ask />,
      },
      {
        path: "/do",
        element: <DooDoo />,
      },
      {
        path: "/profile",
        element: (
        
            <Profile />
         
        ),
      },
    ],
  },
]);

export default App;

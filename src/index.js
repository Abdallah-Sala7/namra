import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import LoginLayout from "./pages/LoginLayout";
import Login from "./components/Login";

const LazyLoad = React.lazy(() => import("./pages/Matches"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "matches",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyLoad />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ index: true, element: <Login /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

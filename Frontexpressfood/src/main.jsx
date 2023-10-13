import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import ErrorPage from "./error-page";
import Dishes from "./routes/Dishes";
import Desserts from "./routes/Desserts";
import Cart from "./routes/Cart";
import Register from "./routes/Register";
import Connection from "./routes/Connection";
import Account from "./routes/Account";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/plats",
    element: <Dishes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/desserts",
    element: <Desserts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/panier",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inscription",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/connexion",
    element: <Connection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mon-compte",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

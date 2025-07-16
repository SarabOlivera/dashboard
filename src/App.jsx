import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Products from "./components/product/Products";
import Users from "./components/Users";
import Orders from "./components/Orders";
import FormularyProduct from "./components/product/FormularyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "addproducts/:id",
        element: <FormularyProduct />,
      },
      {
        path: "addproducts",
        element: <FormularyProduct />,
      },
      { path: "*", element: <h1>Error 404</h1> },
    ],
  },
]);

export default function AdminDashboard() {
  return <RouterProvider router={router} />;
}

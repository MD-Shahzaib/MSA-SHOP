// Import-Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Screens.
import Home from '../Screens/Home'
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import ForgotPassword from "../Screens/ForgotPassword";
import ChangePassword from "../Screens/ChangePassword";
import Profile from "../Screens/Profile";
import Product from "../Screens/Product";
import Cart from "../Screens/Cart";
import Checkout from "../Screens/Checkout"
import Order from "../Screens/Order";

// Import-Router-Components.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgotPassword",
        element: <ForgotPassword />,
    },
    {
        path: "/changePassword",
        element: <ChangePassword />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/product/:id",
        element: <Product />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/order",
        element: <Order />,
    },
]);

// Export-Router-Component.
export default function Router() {
    return (
        <RouterProvider router={router} />
    )
};
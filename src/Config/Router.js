// Import-Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Screens.
import Home from '../Screens/Home'
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Cart from "../Screens/Cart";
import Detail from "../Screens/Detail";
import Profile from "../Screens/Profile";

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
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
]);

// Export-Router-Component.
export default function Router() {
    return (
        <RouterProvider router={router} />
    )
};
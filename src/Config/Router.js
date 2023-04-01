// Import-Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import-Screens.
import Home from '../Screens/Home'
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

// Export-Router-Components.
export default function Router() {
    return (
        <RouterProvider router={router} />
    )
};
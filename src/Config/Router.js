// Import-Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import-Screens.
import Home from '../Screens/Home'
import Cart from "../Screens/Cart";

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
]);

// Export-Router-Components.
export default function Router() {
    return (
        <RouterProvider router={router} />
    )
};
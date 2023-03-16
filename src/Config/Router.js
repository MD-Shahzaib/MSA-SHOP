// Import-Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import-Screens.
import Home from '../Screens/Home'
import About from '../Screens/About'

// Import-Router-Components.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

// Export-Router-Components.
export default function Router() {
    return (
        <RouterProvider router={router} />
    )
};
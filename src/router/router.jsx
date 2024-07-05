import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Photo from "../pages/photo";
import About from "../pages/about";
import Examples from "../pages/Examples";
import Coast from "../pages/coast";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Photo /> },
            { path: "about", element: <About /> },
            { path: "examples", element: <Examples />},
            { path: "coast", element: <Coast /> }
        ]
    }
])
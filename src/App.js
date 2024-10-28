import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./stylesheets/App.css"
import Start from "./components/start"
import logo from "./assets/logo.png"
import Loading from "./components/loading"
import Home from "./components/start"

const router = createBrowserRouter ([
    {
        path:"/",
        element: <Start logo={logo}/>,
    },
    {
        path:"/loading",
        element: <Loading/>,

    },
    {
        path:"/home",
        element: <Home/>,

    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
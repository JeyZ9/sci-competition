import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AddActivity from "../pages/AddActivity";
import Activity from "../pages/Activity";
import Register from "../pages/Register";
import EditActivity from "../pages/EditActivity";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/activity",
                element: <Activity />
            },
            {
                path: "/update/:id",
                element: <EditActivity />
            },
            {
                path: "/add-activity",
                element: <AddActivity />
            }
        ]
    }
])

export default router;
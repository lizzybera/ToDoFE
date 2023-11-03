import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import Header from "../pages/screen/Header";
import Layout from "../static/Layout";
import HomeScreen from "../pages/screen/HomeScreen";
import PrivateRouter from "./PrivateRouter";
import Progress from "../pages/screen/Progress";
import Done from "../pages/screen/Done";
import Task from "../pages/screen/Task";

export const mainRouter = createBrowserRouter([
    {
        path : "/reg",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    {
        path : "/head",
        element : <Header />
    },
    {
        path : "/",
        element : 
        <PrivateRouter>
        <Layout />
        </PrivateRouter>,
        children : [
            {
                index : true,
                element : <HomeScreen />
            },
            {
                path : "/progress",
                element : <Progress />
            },
            {
                path : "/done",
                element : <Done />
            },
            {
                path : "/task",
                element : <Task />
            },
        ]
    },
    
])
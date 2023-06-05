import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import MyTasks from "../pages/MyTasks/MyTasks";
import AddTask from "../pages/AddTask/AddTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myTasks',
                element: <MyTasks></MyTasks>,
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;
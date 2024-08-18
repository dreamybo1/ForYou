import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage"
import { Profile } from "../../pages/Profile";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainPage />,
    },
    {
        path: 'profile',
        element: <Profile />
    }


]) 



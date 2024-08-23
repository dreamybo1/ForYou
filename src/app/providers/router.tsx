import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage"
import { Profile } from "../../pages/Profile";
import { Video } from "../../pages/Video";
import { Info } from "../../pages/Info";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainPage />,
    },
    {
        path: 'profile',
        element: <Profile />
    },
    {
        path: 'video',
        element: <Video />
    },
    {
        path: 'info',
        element: <Info />
    }


]) 



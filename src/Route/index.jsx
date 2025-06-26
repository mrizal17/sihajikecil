import Home from "../Pages/Home"
import VideoKepulangan from "../Pages/VideoKepulangan"
import MediaInformasi from "../Pages/MediaInformasi"
import VideoKeberangkatan from "../Pages/VideoKeberangkatan"

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path:"/MediaInformasi",
        element: <MediaInformasi />
    },
    {
        path: "/VideoKeberangkatan",
        element: <VideoKeberangkatan />
    },
    {
        path: "/VideoKepulangan",
        element: <VideoKepulangan/>
    }
]
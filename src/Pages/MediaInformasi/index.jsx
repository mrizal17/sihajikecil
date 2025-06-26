import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const MediaInformasi = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center my-3 gap-4">
                <div className="border border-black w-40 h-32 rounded-3xl flex items-center justify-center hover:scale-95">
                    <Link to={"/VideoKeberangkatan"}>
                    <p>Video Keberangkatan</p>
                    </Link>
                </div>
                <div className="border border-black w-40 h-32 rounded-3xl flex items-center justify-center hover:scale-95">
                    <Link to={"/VideoKepulangan"}>
                    <p>Video Kepulangan</p>
                    </Link>
                </div>
                <div className="border border-black w-40 h-32 rounded-3xl flex items-center justify-center hover:scale-95">
                    <p>Media Edukasi</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default MediaInformasi;
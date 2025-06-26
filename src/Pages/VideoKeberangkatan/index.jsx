import { useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const VideoKeberangkatan = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { src: "/videos/vid1.mp4", title: "Sehat Selama Penerbangan" },
    { src: "/videos/vid2.mp4", title: "Penggunaan Toilet di Pesawat" },
    { src: "/videos/vid3.mp4", title: "Cegah Kaki Melepuh" },
    { src: "/videos/vid4.mp4", title: "Puncak Haji" },
    { src: "/videos/vid5.mp4", title: "Tips Sehat di Armuzna" },
    { src: "/videos/vid6.mp4", title: "Waspada Sakit di Pondokan" },
    { src: "/videos/vid7.mp4", title: "Peregangan di Perjalanan" },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#f5f9f6] to-[#e8f5e9] min-h-screen">
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-green-800">
          🎥 Video Keberangkatan Haji
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <video
                  src={video.src}
                  controls
                  className="w-full h-48 object-cover cursor-pointer rounded-lg hover:scale-105 transition duration-300"
                  onClick={() => setSelectedVideo(video.src)}
                />
              </div>
              <p className="mt-3 text-center font-semibold text-green-700">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Modal fullscreen */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-4xl w-full mx-4 rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VideoKeberangkatan;

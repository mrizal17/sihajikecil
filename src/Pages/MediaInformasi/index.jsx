import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const MediaInformasi = () => {
  const cards = [
    {
      title: "Video Keberangkatan",
      link: "/VideoKeberangkatan",
    },
    {
      title: "Video Kepulangan",
      link: "/VideoKepulangan",
    },
    {
      title: "Media Edukasi",
      link: null, 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-6">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Media Informasi
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) =>
            card.link ? (
              <Link
                to={card.link}
                key={index}
                className="bg-white border border-gray-300 rounded-3xl shadow-md hover:shadow-xl hover:scale-[0.97] transition-all duration-300 flex items-center justify-center h-32 text-center p-4"
              >
                <p className="font-semibold text-gray-700">{card.title}</p>
              </Link>
            ) : (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-3xl shadow-md flex items-center justify-center h-32 text-center p-4 opacity-70 cursor-not-allowed"
              >
                <p className="font-semibold text-gray-500">{card.title}</p>
              </div>
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MediaInformasi;

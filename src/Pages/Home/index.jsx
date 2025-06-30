import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
<div className="w-full h-60 md:h-80 lg:h-[400px] mt-2">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    pagination={{ clickable: true }}
    className="w-full h-full"
  >
    <SwiperSlide>
      <img src="/images/carousel/hero1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/carousel/hero2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/carousel/hero3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/carousel/hero4.jpg" alt="Slide 3" className="w-full h-full object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/carousel/hero5.jpg" alt="Slide 3" className="w-full h-full object-cover" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/images/carousel/hero6.jpg" alt="Slide 3" className="w-full h-full object-cover" />
    </SwiperSlide>
  </Swiper>
</div>


      {/* Konten */}
      <div className="container mx-auto p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-[#78A083] p-4 rounded shadow text-white">
            <h1 className="text-2xl font-bold text-center mb-2">e-Istitaah</h1>
            <p>Surat keterangan istitaah kesehatan adalah surat keterangan mampu untuk berangkat haji berdasarkan penilaian kesehatan fisik dan mental.</p>
            <p className="mt-2">Hasil pemeriksaan kesehatan yang sudah diinput oleh tim penyelenggara kesehatan akan diolah dan dianalisis oleh Siskohatkes.</p>
            <p>Hasil analisis tersebut berupa penetapan status istitaah kesehatan jemaah haji.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#78A083] p-4 rounded shadow text-white">
            <h1 className="text-2xl font-bold text-center mb-2">Surat Keterangan Vaksin</h1>
            <p>Surat keterangan telah dilakukan vaksinasi sebagai syarat wajib keberangkatan haji. Vaksinasi yang dimaksud adalah vaksinasi meningitis dan polio.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#78A083] p-4 rounded shadow text-white">
            <h1 className="text-2xl font-bold text-center mb-2">Media Informasi</h1>
            <p>Media informasi Kesehatan haji adalah segala bentuk saluran atau alat yang digunakan untuk mengumpulkan, mengolah, dan menyampaikan informasi kepada Calon Jemaah Haji.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#78A083] p-4 rounded shadow text-white">
            <h1 className="text-2xl font-bold text-center mb-2">Hasil Pengukuran Kebugaran</h1>
            <p>Hasil pengukuran kebugaran Jemaah Haji adalah proses menilai tingkat kebugaran fisik melalui berbagai tes dan evaluasi.</p>
            <p className="mt-2">Tujuannya untuk mengetahui kemampuan tubuh dan merancang program latihan yang sesuai.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#78A083] p-4 rounded shadow text-white">
            <h1 className="text-2xl font-bold text-center mb-2">List Obat Bawaan Jemaah</h1>
            <p>Surat keterangan yang menyatakan bahwa Jemaah Haji membawa obat-obatan tertentu untuk mendampingi saat pelaksanaan ibadah haji.</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />

            {/* hero section */}
            <div className="border-b-black h-36 w-auto border mt-2 border-x-violet-600">
                <img src="" alt="" />
            </div>
            {/* Menu Bawah */}
            <div>
                <div className="border border-black h-auto w-[395px] bg-[#78A083]">
                    <h1 className="text-center text-3xl font-semibold text-white">e-Istitaah</h1>
                    <p className="justify-center m-0.5">Surat keterangan istitaah kesehatan adalah surat keterangan
                        mampu untuk berangkat haji berdasarkan penilaian kesehatan fisik dan mental.</p>
                    <p>Hasil pemeriksaan kesehatan yang sudah diinput oleh tim penyelenggara kesehatan akan diolah dan dianalisis oleh Siskohatkes.
                        Hasil analisis tersebut berupa penetapan status istitaah kesehatan jemaah haji.</p>
                        <button></button>
                </div>
                <div className="border border-black h-auto w-[395px] bg-[#78A083]">
                    <h1 className="text-center text-3xl font-semibold text-white">Surat Keterangan Vaksin</h1>
                    <p className="justify-center m-0.5">Surat keterangan telah di lakukan vaksinasi sebagai syarat wajib keberangkatan haji.
                        Vaksinasi yang di maksud adalah vaksinasi meningitis dan polio</p>
                </div>
                <div className="border border-black h-auto w-[395px] bg-[#78A083]">
                    <h1 className="text-center text-3xl font-semibold text-white">Media Informasi</h1>
                    <p className="justify-center m-0.5">Media informasi Kesehatan haji adalah segala bentuk saluran atau alat yang digunakan untuk mengumpulkan,
                        mengolah, dan menyampaikan informasi kepada Calon Jemaah Haji</p>
                </div>
                <div className="border border-black h-auto w-[395px] bg-[#78A083]">
                    <h1 className="text-center text-2xl font-semibold text-white">Hasil Pengukuran Kebugaran</h1>
                    <p className="justify-center m-0.5">Hasil Pengukuran kebugaran Jemaah Haji adalah proses menilai tingkat kebugaran fisik Calon Jemaah Haji melalui berbagai tes dan evaluasi yang telah dilakukan oleh tim pemeriksa haji.
                        Tujuannya adalah untuk mengetahui sejauh mana kemampuan tubuh dalam melakukan aktivitas sehari-hari,
                        serta sebagai dasar untuk merancang program latihan yang sesuai untuk meningkatkan atau mempertahankan kebugaran.  </p>
                </div>
                <div className="border border-black h-auto w-[395px] bg-[#78A083]">
                    <h1 className="text-center text-2xl font-semibold text-white">List Obat Bawaan Jemaah </h1>
                    <p className="justify-center m-0.5">Surat keterangan yang menyatakan bahwa Jemaah Haji membawa obat-obatan tertentu untuk 
                        mendampingi saat pelaksanaan ibadah haji </p>
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}
export default Home;
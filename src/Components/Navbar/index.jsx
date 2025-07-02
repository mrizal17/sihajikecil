import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Tampilkan hanya di tampilan mobile */}
      <header className="bg-[#212121] text-black shadow-md px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="Logo" className="w-12 h-14 rounded-full" />
            <div className="text-white">
            <p className="text-xl font-bold">SiHajiKecil</p>
            <p className="text-xs">(Sistem Informasi HAJI Puskesmas Cilandak)</p>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-6 items-center font-medium text-white">
            <Link to="/e-istitaah" className="hover:underline">e-Istitaah</Link>
            <Link to="/surat-vaksin" className="hover:underline">Surat Keterangan Vaksin</Link>
            <Link to="/hasil-kebugaran" className="hover:underline">Hasil Pengukuran Kebugaran</Link>
            <Link to="/list-obat" className="hover:underline">List Obat Bawaan Jemaah</Link>
            <Link to="/MediaInformasi" className="hover:underline">Media Informasi</Link>
          </nav>

          {/* Hamburger Menu (Tombol) */}
          <div className="md:hidden text-white">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Tampil hanya di Mobile) */}
        {menuOpen && (
          <div className="flex flex-col gap-3 mt-3 font-medium px-2 md:hidden transition-all duration-300 ease-in-out text-white">
            <Link to="/e-istitaah" onClick={toggleMenu} className="hover:underline">
              e-Istitaah
            </Link>
            <Link to="/surat-vaksin" onClick={toggleMenu} className="hover:underline">
              Surat Keterangan Vaksin
            </Link>
            <Link to="/hasil-kebugaran" onClick={toggleMenu} className="hover:underline">
              Hasil Pengukuran Kebugaran
            </Link>
            <Link to="/list-obat" onClick={toggleMenu} className="hover:underline">
              List Obat Bawaan Jemaah
            </Link>
            <Link to="/MediaInformasi" onClick={toggleMenu} className="hover:underline">
              Media Informasi
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

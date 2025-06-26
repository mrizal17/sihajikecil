import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-[#B6F500] px-4 py-3 text-black">
      <div className="flex items-center justify-between">
        {/* Logo + SihajiKecil */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-12 h-14" />
          <p className="text-xl font-bold">SiHajiKecil</p>
        </div>

        {/* Tombol Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <p>e-Istitaah</p>
          <p>Surat keterangan Vaksin</p>
          <p>Hasil Pengukuran Kebugaran</p>
          <p>List Obat Bawaan Jemaah</p>
          <Link to="/MediaInformasi" className="hover:underline">Media Informasi</Link>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="flex flex-col gap-3 mt-3 md:hidden">
          <p>e-Istitaah</p>
          <p>Surat Keterangan Vaksin</p>
          <p>Hasil Pengukuran Kebugaran</p>
          <p>List Obat Bawaan Jemaah</p>
          <Link to="/MediaInformasi" className="hover:underline">Media Informasi</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

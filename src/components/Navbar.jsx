
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo here*/}
        <h3 className="font-bold text-2xl">CS — Ticket System</h3>

        {/* desktop menu here*/}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded font-semibold">
            New Ticket
          </button>
        </div>

        {/* mobile icons */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 animate-slideDown">
          <ul className="flex flex-col gap-4 text-lg">
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded font-semibold mt-4 w-full">
            New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

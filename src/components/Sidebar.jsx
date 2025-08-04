import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Layanan", path: "/layanan-admin" },
    { name: "Galeri", path: "/galeri-admin" },
    { name: "Reviews", path: "/reviews-admin" },
    { name: "History Booking", path: "/history-booking" },
    { name: "Kontak", path: "/kontak-admin" },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 bg-primary text-white">
        <button onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-primary text-white w-64 p-6 fixed md:static h-auto transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block py-2 px-4 rounded hover:bg-primary/80"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

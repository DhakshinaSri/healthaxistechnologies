import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/healthaxislogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    if (!isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-18 items-center">
          {/* Logo */}
          <div className="cursor-pointer shrink-0">
            <Link to="/">
              <img src={logo} alt="Company Logo" className="h-13 lg:h-15 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu - Modified to trigger only at lg screens (1024px+) */}
          <div
            ref={dropdownRef}
            className="hidden lg:flex space-x-6 xl:space-x-8 relative items-center"
          >
            {menus.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.subMenu?.length > 0;

              return (
                <div key={index} className="relative group">
                  {hasSubmenu ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`text-[14px] font-montserrat font-medium flex items-center gap-1 transition ${
                        openDropdown === item.name
                          ? "text-[#081F5C]"
                          : "text-black hover:text-[#081F5C]"
                      }`}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-[14px] font-montserrat font-medium pb-1 whitespace-nowrap transition ${
                        isActive
                          ? "border-b-4 border-[#081F5C] text-[#081F5C]"
                          : "text-black hover:text-[#081F5C]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {hasSubmenu && openDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-3 w-72 bg-white shadow-xl border border-gray-100 rounded-lg py-3 z-40">
                      <h4 className="text-[#081F5C] font-semibold text-[16px] px-4 pb-2">
                        {item.name}
                      </h4>
                      <div className="flex flex-col space-y-2 px-4">
                        {item.subMenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            onClick={() => setOpenDropdown(null)}
                            className="text-[14px] mt-3 text-gray-800 font-medium hover:text-[#081F5C] transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile/Medium Menu Toggle - Shows up on everything below lg */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#081F5C] p-1 px-3 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 z-50 overflow-y-auto py-12">
          <button
            className="absolute top-6 right-4 text-[#081F5C] p-2 px-4 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {menus.map((item, index) => {
            const isActive = location.pathname === item.path;
            const hasSubmenu = item.subMenu?.length > 0;
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div key={index} className="flex flex-col items-center">
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : item.name)
                      }
                      className={`text-[15px] font-montserrat font-medium flex items-center gap-2 ${
                        isActive || isDropdownOpen
                          ? "text-[#081F5C]"
                          : "text-black hover:text-[#081F5C]"
                      }`}
                    >
                      {item.name}
                      {isDropdownOpen ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="flex flex-col mt-4 text-center space-y-4">
                        {item.subMenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="text-[14px] font-medium text-gray-800 hover:text-[#081F5C]"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[15px] font-montserrat font-medium ${
                      isActive
                        ? "text-[#081F5C] border-b-2 border-[#081F5C]"
                        : "text-black hover:text-[#081F5C]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
import { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [searchMobile, setSearchMobile] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Book", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10">
      <div className="flex items-center text-center">
        <div className="w-3/12 lg:hidden text-left">
          <button
            onClick={() => {
              setOffCanvas(!offCanvas);
            }}
          >
            <HiOutlineMenuAlt2 className="h-6 w-6 md:h-11 md:w-11 text-white/40 inline-block" />
          </button>
        </div>

        <div className="w-6/12 lg:w-2/12 flex items-center justify-center lg:justify-start gap-4">
          <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center shadow-2xl">
            LS
          </div>{" "}
          Librarus
        </div>
        <div className="w-3/12 lg:hidden text-right">
          <button
            onClick={() => {
              setSearchMobile(true);
            }}
          >
            <HiOutlineSearch className="h-6 w-6 md:h-8 md:w-8 text-white/40 inline-block" />
          </button>
        </div>
        <div
          className={`fixed bg-gradient-to-b from-gray-600 to-gray-900 w-full top-0 transition-all ${
            offCanvas ? "left-0" : "-left-full"
          } h-screen p-10 lg:relative lg:w-7/12`}
        >
          <div className="absolute right-5 top-8">
            <button
              onClick={() => {
                setOffCanvas(false);
              }}
            >
              <MdOutlineClose className="h-8 w-8 md:h-11 md:w-11 text-white" />
            </button>
          </div>
          <ul className="flex lg:space-x-10 flex-col lg:flex-row text-left space-y-10">
            <li>
              <a href="" className="hover:underline">
                UI/UX
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Front-End
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Back-End
              </a>
            </li>
            <li className="relative transition-all">
              <span
                className="hover:underline cursor-pointer flex items-center"
                onClick={() => setDropdown(!dropdown)}
              >
                Lainnya
                <svg
                  className={`ml-2 transfom${
                    dropdown ? "transform rotate-180" : "transform rotate-0"
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {dropdown && (
                <ul className="absolute w-[200px] bg-gray-800 rounded shadow-xl overflow-hidden mt-4 transition ease-in delay-100">
                  {dropdownList.map(({ text, href }) => (
                    <li
                      key={text}
                      className="border-b border-white/5 last:border-0"
                    >
                      <a
                        href={href}
                        className="flex py-3 px-6 hover:bg-gray-700/50 transition-all"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div
          className={`lg:block lg:w-3/12 absolute w-full transition-all ${
            searchMobile ? "top-10" : "-top-full"
          } left-0 px-7`}
        >
          <input
            type="text"
            className="bg-gray-700 hover:bg-gray-800/80 transition-all py-4 px-6 w-full p-3 rounded-lg relative lg:rounded-full bg-search pl-12 outline-none focus:bg-gray-800"
            placeholder="Search..."
          />
          <div className="absolute right-10 top-4 lg:hidden ">
            <button
              onClick={() => {
                setSearchMobile(false);
              }}
            >
              <MdOutlineClose className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

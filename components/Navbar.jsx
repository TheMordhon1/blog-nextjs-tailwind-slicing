import { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Book", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10">
      <div className="flex items-center justify-between">
        <div className="w-2/12 flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center shadow-2xl">
            LS
          </div>{" "}
          Librarus
        </div>
        <div className="md:6/12 lg:w-7/12">
          <ul className="flex space-x-10">
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
        <div className="md:w-2/12 lg:w-3/12 float-right">
          <input
            type="text"
            className="bg-gray-700 hover:bg-gray-800/80 transition-all py-4 px-6 w-full p-3 rounded-full bg-search pl-12 outline-none focus:bg-gray-800/80"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
}

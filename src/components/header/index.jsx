import React from "react";

function Header() {
  return (
    <div className="bg-[#152a46] text-white">
      <div className="navbar w-[90%] mx-auto py-6">
        <div className="flex-1">
          <a className="font-bold normal-case text-2xl">LOGO</a>
        </div>
        <div className="flex-none font-semibold">
          <ul className="menu menu-horizontal px-1 mr-6">
            <li>
              <a>
                Program
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#183150]">
                <li>
                  <a>Program 1</a>
                </li>
                <li>
                  <a>Program 2</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Bidang Ilmu
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#183150]">
                <li>
                  <a>Bidang ilmu 1</a>
                </li>
                <li>
                  <a>Bidang ilmu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Tentang edspert</a>
            </li>
          </ul>
          <button className="bg-[#FF6161] rounded-full px-6 py-4">
            Masuk/Daftar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

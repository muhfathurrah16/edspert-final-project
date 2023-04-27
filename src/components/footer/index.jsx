import React from "react";

function Footer() {
  return (
    <div className="footer-section w-[90%] mx-auto py-10">
      <div className="sitemap grid grid-cols-3">
        <div className="text-[#A3A3A3] text-left">
          <h1 className="font-semibold">TAGLINE edspert disini</h1>
          <p>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55581
          </p>
        </div>
        <div className="menu-list text-left col-span-2 flex justify-evenly">
          <div>
            <h1 className="font-semibold text-lg text-[#212121]">Program</h1>
            <ul className="my-2 leading-loose">
              <li className="item-menu">Online Course</li>
              <li className="item-menu">Mini Bootcamp</li>
              <li className="item-menu">Bootcamp</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-[#212121]">
              Bidang ilmu
            </h1>
            <ul className="my-2 leading-loose">
              <li className="item-menu">Digital marketing</li>
              <li className="item-menu">Product management</li>
              <li className="item-menu">English</li>
              <li className="item-menu">Programming</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-[#212121]">
              Tentang edspert
            </h1>
            <ul className="my-2 leading-loose">
              <li className="item-menu">Bantuan</li>
              <li className="item-menu">Kontak kami</li>
              <li className="item-menu">Media sosial</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-[#A3A3A3] text-right mr-36 my-10
        ">
          Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
        </p>
      </div>
    </div>
  );
}

export default Footer;

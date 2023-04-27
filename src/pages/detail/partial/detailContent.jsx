import React from "react";
import ListIcon from "../../../assets/list-icon.svg";

const listMateri = [
  {
    id: 1,
    title: "Pengenalan Programming Laravel",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
  {
    id: 2,
    title: "Materi Bootcamp Laravel 2",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
  {
    id: 3,
    title: "Materi Bootcamp Laravel 3",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
  {
    id: 4,
    title: "Materi Bootcamp Laravel 4",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
  {
    id: 5,
    title: "Materi Bootcamp Laravel 5",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
  {
    id: 6,
    title: "Materi Bootcamp Laravel 6",
    detail:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
  },
];

const listFasilitas = [
  "E-Sertifikat",
  "Portfolio",
  "Job Connector",
  "Career Development",
];

function DetailContent() {
  return (
    <div className="detail-container flex w-[90%] mx-auto gap-8 my-4">
      {/* START SIDEBAR */}
      <div className="menu-product bg-white py-4 rounded-xl my-6 h-fit">
        <ul className="menu bg-base-100 w-72 text-lg">
          <li>
            <a className="pl-10">Materi</a>
          </li>
          <li className="bordered active">
            <a className="pl-10">Fasilitas</a>
          </li>
        </ul>
        <div className="divider"></div>
        <div className="price flex justify-around mb-4">
          <p className="text-[#6D7175] font-semibold text-sm line-through">
            Rp. 125.000
          </p>
          <p className="text-[#FF6A28] font-semibold text-lg">Rp. 99.000</p>
        </div>
        <div className="btn-group w-full px-4">
          <button className="bg-[#FFCD29] hover:bg-[#f3c019] w-full p-2 rounded-full text-white font-semibold">
            Daftar Kelas
          </button>
        </div>
      </div>
      {/* END SIDEBAR */}

      <div className="detail-content">
        {/* START MATERI */}
        <div className="detail-info bg-white w-full py-6 px-10 my-6 rounded-xl text-left">
          <div className="item-list">
            <h1 className="text-xl font-semibold">Materi</h1>
            <ul className="py-3 ">
              {listMateri.map((item) => (
                <li key={item.id} className="my-2">
                  <div className="flex items-start gap-2">
                    <img src={ListIcon} alt="list item" className="py-1" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-xs text-[#868686] py-2">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* END MATERI */}

        {/* START FASILITAS */}
        <div className="detail-info bg-white w-full py-6 px-10 my-6 rounded-xl text-left">
          <div className="item-list">
            <h1 className="text-xl font-semibold">Materi</h1>
            <ul className="py-3">
              {listFasilitas.map((item, key) => (
                <li key={key} className="my-2">
                  <div className="flex items-start gap-2">
                    <img src={ListIcon} alt="list item" className="py-1" />
                    <div>
                      <h3 className="font-semibold">{item}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* END FASILITAS */}
      </div>
    </div>
  );
}

export default DetailContent;

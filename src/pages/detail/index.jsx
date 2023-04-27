import React from "react";
import BannerDetail from "./partial/bannerDetail";
import DetailContent from "./partial/detailContent";

function ProductDetail() {
  return (
    <div className="bg-[#EFF4FA] min-h-screen">
      <BannerDetail />
      <DetailContent />

      <div className="section-info my-4 bg-[#2B3E58] text-white h-[35vh] flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-8">Sudah siap bergabung?</h1>
        <button className="bg-[#FFCD29] hover:bg-[#f3c019] py-2 px-10 rounded-full text-white font-semibold w-fit mx-auto">
          Daftar Kelas
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

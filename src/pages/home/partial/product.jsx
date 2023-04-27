import React from "react";
import Card from "../../../components/card";
import { products } from "../../../helpers/data";

function Product() {
  console.log("products : ", products);
  return (
    <div className="product-section bg-[#EFF4FA] py-20 min-h-screen relative">
      <div className="product-list mx-auto  w-[90%] grid grid-cols-4 gap-6 flex-wrap">
        <Card data={products} />
      </div>
      <div className="btn-group mt-16">
        <button className="btn bg-[#152A46] text-white">1</button>
        <button className="btn bg-[#152A46] text-white">2</button>
        <button className="btn btn-disabled text-[#152A46]">...</button>
        <button className="btn bg-[#152A46] text-white">99</button>
        <button className="btn bg-[#152A46] text-white">100</button>
      </div>
    </div>
  );
}

export default Product;

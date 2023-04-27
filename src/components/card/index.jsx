import React from "react";
import personImage from "../../assets/person.png";

function Card({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div
          className="product-card rounded-xl drop-shadow-lg hover:shadow-xl transition-all duration-100 cursor-pointer"
          key={item.id}
        >
          <div className="header-card relative bg-[#152A46] flex items-center gap-4 p-4 rounded-t-xl">
            <div className="header-card-image -mb-4">
              <img src={personImage} alt="Person" />
            </div>
            <div className="header-card-text text-left mb-4">
              <h2 className="sub-header text-yellow-400 font-semibold text-sm">
                {item.subtitle}
              </h2>
              <h1 className="title font-bold text-white">{item.title}</h1>
              <h2 className="text-white text-xs">{item.description}</h2>
            </div>
          </div>
          <div className="content-card bg-white p-4 rounded-b-xl">
            <div className="title font-semibold text-left">
              <h1 className="text-lg">{item.title}</h1>
              <h2 className="text-sm">{item.description}</h2>
            </div>
            <div className="detail my-4">
              <table class="table-auto text-left text-sm">
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-500 pr-4">Batch</p>
                    </td>
                    <td>
                      <p>{item.batch}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-500 pr-4">Mentor</p>
                    </td>
                    <td>
                      <p>{item?.mentor?.join(", ")}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="price inline-flex gap-2 text-right -mr-16">
              {item?.is_discount && (
                <p className="normal-price text-gray-500 text-sm line-through">
                  {item?.normal_price}
                </p>
              )}
              <p className="discount-price font-bold text-xl text-[#0ACF83]">
                {item?.final_price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

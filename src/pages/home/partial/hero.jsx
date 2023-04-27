import React from "react";
import heroImage from "../../../assets/hero-image.png";

function Hero() {
  return (
    <div className="hero-section bg-[#152a46]">
      <div className="flex items-center w-[90%] mx-auto">
        <div className="hero-text flex-1 text-white text-left">
          <h1 className="hero-text-title text-5xl font-bold leading-snug">
            Jadi expert bersama edspert.id
          </h1>
          <p className="hero-text-detail my-6 text-lg">
            Tingkatkan skill dan pengetahuan bersama para mentor <br /> terbaik
            di bidangnya, untuk siapkan karir impian anda.
          </p>
        </div>
        <div className="hero-image flex-1 ml-40">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

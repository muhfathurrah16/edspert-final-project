import React from "react";
import MentorImage from "../../../assets/mentor-section.png";

function BannerDetail() {
  return (
    <div className="banner-detail bg-[#152a46]">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[50vh]">
        <div className="hero-text text-white text-left">
          <span>
            <h1 className="hero-text-title text-5xl font-bold leading-snug">
              Programming Laravel
            </h1>
            <h3 className="hero-text-detail text-3xl my-6">
              Getting Started with Laravel 9
            </h3>
          </span>
          <div className="mentor-section">
            <p>Mentor</p>
            <div className="mentor-list flex gap-8">
              <span>
                <p className="font-semibold text-lg">William Hartono</p>
                <p>Developer at Widya Edu</p>
              </span>
              <span>
                <p className="font-semibold text-lg">Farel Prayoga</p>
                <p>Developer at Widya Edu</p>
              </span>
            </div>
          </div>
        </div>
        <div className="hero-image mb-[-10rem]">
          <img src={MentorImage} alt="hero image" className="h-[250px]" />
        </div>
      </div>
    </div>
  );
}

export default BannerDetail;

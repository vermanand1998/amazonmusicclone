import React, { useState } from "react";
import "../SongDetails/SongDetailsPage.css";
import { AiOutlinePlus, AiOutlinePlayCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const SongDetailsPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="sdp-image-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sdp-image-container">
          <div className="sdp-image-number">1</div>
          <img
            src="https://m.media-amazon.com/images/I/51xY66EsVEL._UX500_FMwebp_QL85_.jpg"
            alt="album-banner"
            className="sdp-image"
          />
          {isHovered && (
            <div className="play-icon">
              <AiOutlinePlayCircle className="play-icon-inner" />
            </div>
          )}
          <div className="sdp-text-container">
            <h3>Chaleya</h3>
            <p>Anirudh Ravichander, Arijit Singh & Shilpa Rao</p>
          </div>
        </div>
        {/* <div className="sdp-additional-content">
          
        </div> */}
        <div className="sdp-heading">Jawan</div>
        <div className="sdp-duration">Duration</div>
        <div className="sdp-icons">
          <AiOutlinePlus className="sdp-icon" />
          <BsThreeDots className="sdp-icon" />
        </div>
      </div>
      {/* Next Line */}
      <div
        className="sdp-image-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sdp-image-container">
          <div className="sdp-image-number">2</div>
          <img
            src="https://m.media-amazon.com/images/I/418mqhHqZDL._SX354_SY354_BL0_QL100__UX500_FMwebp_QL85_.jpg"
            alt="album-banner"
            className="sdp-image"
          />
          {isHovered && (
            <div className="play-icon">
              <AiOutlinePlayCircle className="play-icon-inner" />
            </div>
          )}
          <div className="sdp-text-container">
            <h3>Heeriye (feat. Arijit Singh)</h3>
            <p>Jasleen Royal, Arijit Singh & Dulquer Salmaan</p>
          </div>
        </div>
        {/* <div className="sdp-additional-content">
         
        </div> */}
        <div className="sdp-heading">Heeriye (feat. Arijit Singh)</div>
        <div className="sdp-duration">Duration</div>
        <div className="sdp-icons">
          <AiOutlinePlus className="sdp-icon" />
          <BsThreeDots className="sdp-icon" />
        </div>
      </div>
    </>
  );
};

export default SongDetailsPage;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BsPlayCircle } from "react-icons/bs";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";
import { TrendingSongsFunction } from "../../Data/ApiFunctions";
import "../TrendingSongs/TrendingSongs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const TrendingSongs = () => {
  const [data, setData] = useState([]);

  const {
    playSong,
    songDetails,
    isPlaying,
    setSongDetails,
    setIsPlaying,
    setPlaySong,
    currentindex,
    setCurrentIndex,
  } = useMusicPlayer();

  useEffect(() => {
    TrendingSongsFunction({ setData });
  }, []);

  return (
    <>
    <div className="trending-songs-title">
      <h2 className="trending-songs-heading">Trending Songs</h2>
    </div>
      {/* <Slider {...settings}> */}
      <Carousel
        className="trending-songs-carousel"
        showArrows={true} // Show navigation arrows
        showStatus={true} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={window.innerWidth <= "768" ? 30 : 11} // Show three items at a time
        emulateTouch={false}
      >
        {data.length > 0 &&
          data?.map((item, index) => (
            <div
              className="song-card-"
              key={index}
              onClick={() => {
                setPlaySong(true);
                setIsPlaying(true);
                setSongDetails({
                  img: item?.thumbnail || "",
                  title: item?.title || "",
                  artist: item?.artist[0]?.name || "",
                  songs: data || [],
                  index: index,
                });
                setCurrentIndex(index);
              }}
            >
              <div className="song-card">
                <div className="song-card-image">
                  <img
                    src={item?.thumbnail}
                    alt="Song Thumbnail"
                    style={{ width: "80%", height: "80%" }}
                    className="song-image song-card"
                  />
                </div>
                {/* <div className="song-details"> */}
                  <h6 className="trending-song-card-heading">{item?.title}</h6>
                  <p className="description">
                    {item?.artist.map((text) => text?.name).join(", ")}
                  </p>
                {/* </div> */}
              </div>
            </div>
          ))}
        {/* </Slider> */}
      </Carousel>
    </>
  );
};

export default TrendingSongs;

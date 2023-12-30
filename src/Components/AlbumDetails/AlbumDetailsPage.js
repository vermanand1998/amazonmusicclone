import React, { useEffect, useState } from "react"
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs"
import { GrFormAdd } from "react-icons/gr"
import { BiSolidShareAlt } from "react-icons/bi"
import { AiOutlinePlus, AiOutlinePlayCircle } from "react-icons/ai"
import MusicPlayer from "../MusicPlayer/MusicPlayer"
import { useMusicPlayer } from "../../Context/MusicPlayerProvider"
import { AlbumDetailsPageFunction } from "../../Data/ApiFunctions"
import "../AlbumDetails/AlbumDetailsPage.css"

const AlbumDetailsPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  const category = urlParams.get("category");
  const image = urlParams.get("img") 
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);
  const { playSong, setSongDetails, setIsPlaying, setPlaySong, setCurrentIndex } = useMusicPlayer()

  useEffect(() => {
    AlbumDetailsPageFunction ({setData, myParam});
  }, []);
  
  return (
    <>
      <div className="adp-background">
        <div className="adp-card">
          <img src={image} alt="image-new" className="adp-image" />
          <div className="adp-content">
            <h6 className="adp-subtitle">PLAYLIST</h6>
            <h1 className="adp-title">{category?.toUpperCase()} SONGS</h1>
            <h5 className="adp-tagline">Curated by Amazon Music</h5>
            {/* <p className="adp-description">{data?.description}</p> */}
            <br />
            <p className="adp-p-tag">50 SONGS • 3 HOURS AND 27 MINUTES</p>
            {/* <div className="actions">
              <button className="adp-play-button">
                <BsFillPlayFill /> Play
              </button>
              <button className="adp-icon-button">
                <GrFormAdd />
              </button>
              <button className="adp-icon-button">
                <BiSolidShareAlt />
              </button>
              <button className="adp-icon-button">
                <BsThreeDots />
              </button>
            </div> */}
          </div>
        </div>
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              className="adp-song-card"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}

              onClick={() => {
                    setPlaySong(true);
                    setIsPlaying(true)
                    setSongDetails({
                      img: item?.thumbnail || "",
                      title: item?.title || "",
                      artist: item?.artist[0]?.name || "",
                      songs: data || [],
                      index: index,
                    });
                    setCurrentIndex(index)
                  }}
            >
              <div className="adp-song-info" key={index}>
                <div className="adp-song-number">{index}</div>
                <img
                  src={item?.thumbnail}
                  alt="album-banner"
                  className="adp-song-image"
                />
                {isHovered === index && (
                  <div className="adp-play-icon">
                    <AiOutlinePlayCircle className="adp-play-icon-inner" />
                  </div>
                )}
                <div className="adp-song-text">
                  <h5>{item?.title}</h5>
                  {/* <p> Artist : Unknown</p> */}
                </div>
              </div>
              <div className="adp-song-title">
                <p>{item?.title}</p>
              </div>
              <div className="adp-duration">3.43</div>
              <div className="adp-icons">
                <AiOutlinePlus className="adp-icon" />
                <BsThreeDots className="adp-icon" />
              </div>
            </div>
          ))}
      </div>
      { playSong && (<MusicPlayer/> )}
    </>
  );
};

export default AlbumDetailsPage;

import React from "react";
import "../HomePage/HomePage.css";
import TrendingSongs from "../TrendingSongs/TrendingSongs";
import CardComponents from "../CardComponents/CardComponents";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";
import { arr } from "../../Data/Category"; 

const HomePage = () => {
  const { playSong } = useMusicPlayer()

  return (
    <div className="home-page">
      <TrendingSongs />
      {
         arr?.map((item, index) => {
          return <CardComponents newData = {item} />
        })
      }
      { playSong && (<MusicPlayer/> )}
    </div>
  );
};

export default HomePage;

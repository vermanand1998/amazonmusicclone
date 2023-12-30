import React, { useState, useRef, useEffect } from "react";
import { memo } from "react";
import { FaRandom, FaStepBackward, FaPlay, FaPause, FaStepForward, FaRedo } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import "../MusicPlayer/MusicPlayer.css";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";

const MusicPlayer = () => {
  const audioRef = useRef();
  const { playSong, songDetails, isPlaying, setSongDetails, setIsPlaying, currentindex, setCurrentIndex } = useMusicPlayer();
  const [isRandom, setIsRandom] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(currentindex);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  useEffect(() => {setCurrentIndex
    let updatedSong = songDetails?.songs[currentindex] || {};
    updatedSong = {
      img: updatedSong?.thumbnail || "",
      title: updatedSong?.title || "",
      artist: updatedSong?.artist[0]?.name || "",
      songs: songDetails?.songs || [],
      index: currentindex,
    };
    setSongDetails(updatedSong);
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause();
    }
  }, [playSong, isPlaying, currentindex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playRandomSong = () => {
    const reandomIndex = Math.floor(Math.random() * songDetails.songs.length);
    setCurrentIndex(reandomIndex);
    setIsRandom(true);
  }

  const redoSong = () => {
    setCurrentIndex(currentindex);
  }

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value / 100;
  };

  return (
    <div className="music-player">
      <div className="song-details">
        <img src={songDetails?.img} alt="Album Cover" className="album-cover" />
        <div className="song-info">
          <h3 className="song-heading">{songDetails?.title}</h3>
          <p className="song-data">{songDetails?.artist}</p>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="player-controls">
        <FaRandom className="control-icon" onClick={playRandomSong} />
        <FaStepBackward className="control-icon" onClick={() => setCurrentIndex(currentindex === 0 ? 0 : currentindex - 1)} />
        {isPlaying ? (
          <FaPause className="control-icon play-pause" onClick={togglePlayPause} />
        ) : (
          <FaPlay className="control-icon play-pause" onClick={togglePlayPause} />
        )}
        {console.log(songDetails?.songs[currentindex]?.audio_url)}
        <audio src={songDetails?.songs[currentindex]?.audio_url} ref={audioRef} />
        <FaStepForward className="control-icon" onClick={() => setCurrentIndex(currentindex + 1)} />
        <FaRedo className="control-icon" onClick={redoSong} />
      </div>
      <div className="control-icon-set">
      <AiOutlineSound className="control-icon-volume" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
      <audio
        ref={audioRef}
        src={songDetails?.songs[currentindex]?.audio_url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default memo(MusicPlayer);

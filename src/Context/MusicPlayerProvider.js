import React, { createContext, useState, useContext} from 'react'

const MusicPlayerContext = createContext()

export const MusicPlayerProvider = ({children}) => {
    const [playSong, setPlaySong] = useState(false);
    const [songDetails, setSongDetails] = useState({});
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentindex, setCurrentIndex] = useState();


  return (
    <MusicPlayerContext.Provider
        value = {{
            playSong,
            songDetails,
            isPlaying,
            currentindex,
            setSongDetails,
            setIsPlaying,
            setPlaySong,
            setCurrentIndex,
        }}
    >
        {children}
    </MusicPlayerContext.Provider>
  )
}

export const useMusicPlayer = () => useContext(MusicPlayerContext)
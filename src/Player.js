import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    console.log("player loaded");
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      setPlaying(false);
      console.log("player out" + playing);
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="player">
      <button onClick={toggle} className="audio-button">{playing ? "⏸" : "▷"}</button>
    </div>
  );
};

export default Player;
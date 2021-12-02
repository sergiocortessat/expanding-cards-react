// import React from "react";
// import useSound from "use-sound";
// import './Sounds/applause.mp3';
// const SoundBoard = () => {
//   const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//   const [play, { stop }] = useSound(
//     './Sounds/applause.mp3',
//     { volume: 0.8 }
//   );

//   const [isHovering, setIsHovering] = React.useState(
//     false
//   );
//   return (
//     <>
//       <audio id="applause" src={'/home/sergio/Desktop/MICROVERSE/HTML-CSS-JAVASCRIPT-STYLING/50HTML,CSS,JavaScript/src/CSS,HTML/SoundBoard/Sounds/applause.mp3'} controls autoPlay />
//       {/* <audio id="boo" src="sounds/boo.mp3"></audio>
//       <audio id="gasp" src="sounds/gasp.mp3"></audio>
//       <audio id="tada" src="sounds/tada.mp3"></audio>
//       <audio id="victory" src="sounds/victory.mp3"></audio>
//       <audio id="wrong" src="sounds/wrong.mp3"></audio> */}

//       {/* <div id="buttons">
//         {sounds.map((sound) => (
//           <button key={sound} className="btn" onClick={() => play()}>
//             {sound}
//           </button>
//         ))}
//       </div> */}
//     </>
//   );
// };

// export default SoundBoard;


import React, { useState, useEffect } from "react";

const useAudio = (url:string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const SoundBoard = ({url}:{url:string}) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={() => toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default SoundBoard;
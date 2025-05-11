import React, { useRef } from 'react';
import './VideoPlayer.css'; // Corrected import statement
// Video placeholder - remove import since file may not exist


const VideoPlayer = ( {playState,setPlayState}) => {


const player = useRef(null);
const closePlayer = (e)=>{
  if(e.target === player.current)
    setPlayState(false);
}

  return (
    <div className={` video-player ${playState ?'':'hide'}`} ref={player} onClick={closePlayer}>
        <div style={{
          padding: '40px',
          textAlign: 'center',
          color: '#666'
        }}>
        </div>
    </div>
  );
}

export default VideoPlayer;

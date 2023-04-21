import Vid from "./Vid";
// import Avatar from "./Avatar"
// import Gallery  from "./Gallery";
import "./App.css";
import videos from "./data/data";

import Assignment from "./Assignment";
import PlayButton from "./PlayButton";

export default function App() {

  return (
    <>
    <div>Videos</div>{
      videos.map(video=>
      <Vid
        key={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel="My Journo"
        verified={video.verified}
        id={video.id}
        
      />)
    }
    <PlayButton
      message = "Play msg"
      onPress ={()=>alert('playy')}
    >Play</PlayButton>
    <PlayButton
      message = "pause msg"
      onPress = {()=>document.write('pause')}
    >Pause</PlayButton>
    </>
  );
}

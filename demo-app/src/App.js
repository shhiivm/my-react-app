import Vid from "./Vid";
// import Avatar from "./Avatar"
// import Gallery  from "./Gallery";
import "./App.css";
import videos from "./data/data";

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

      {/* <Gallery/>
      <Avatar/> */}
    </>
  );
}

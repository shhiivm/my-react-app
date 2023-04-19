import Vid from "./Vid";
import Avatar from "./Avatar"
import Gallery  from "./Gallery";
import './App.css';

export default function App(){
  return(
    <>
      <div>Hello</div>
      <Vid
        title = "React Js Tutorial"
        bgColor="Red"
        colour = "Black"
        views = "10.5K"
        time= "10 Days ago"
        channel= "My Journo"
      />
      <Vid
        title = "Node Js Tutorial"
        bgColor="Green"
        colour = "white"
        views = "2.2M"
        time = "1 Year ago"
        channel= "My Journo"
      />


      {/* <Gallery/>
      <Avatar/> */}
    </>
  );
}
import './PlayButton.css';
export default function PlayButton({message,children,onPlay,onPause}){
    let playing = false;
    function handleClick(){
        if(playing) onPause()
        else onPlay();

        playing =! playing;
    }
    return(

            <button onClick={handleClick}>{children}</button>
    );
}
export default function PlayButton({message,children,onPress}){
    function handleClick(){
        onPress();
    }
    return(

            <button onClick={handleClick}>{children}</button>
    );
}
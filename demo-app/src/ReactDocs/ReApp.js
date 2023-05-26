// import ReComp from './ReComp';
import "./ReApp.css";
const user={
    name : 'Hedy lamarr',
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}
export default function MyApp(){
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className = "avatar"
                src = {user.imageUrl}
                alt = {'Photo of '+ user.name}
                style = {{
                    width: user.imageSize,
                    height:user.imageSize
                }}
        
            />
        </>
    );
}
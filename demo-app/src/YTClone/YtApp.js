import YtComp from "./YtComp";
import './YtApp.css'
import thumb from "./YtData";
export default function YtApp(){    
    return(<>
        {
        thumb.map(vid=>
        <YtComp
        title={vid.title}
        channelName={vid.channelName}
        views={vid.views}
        time={vid.time}
        id={vid.id}
        logoId={vid.logoId}
        verified={vid.verified}
        />
        )
        }
    </>
    );
}
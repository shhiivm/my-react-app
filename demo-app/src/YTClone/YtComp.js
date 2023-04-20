export default function YtComp({id,logoId,title,channelName,views,time,verified}){
    return (
    <div className="container">
    <img className="cont" src={`https://picsum.photos/id/${id}/300/200`}/>
    <div className="logo">
        <img className = "img" src={`https://picsum.photos/id/${logoId}/200/110`}/>
    </div>
    <div className="title">{title}</div>
    <div className="channelName">{channelName} {verified ? '✔️':null}</div>
    <div className="views">{views} views <span><strong>.</strong></span>{time} ago</div>

    </div>
    );
}
import './Vid.css'
export default function Vid({title,channel,views,time}) {
    let bg = "dark";
    return(
        <>
            <div className='container'>
            <div className='pic'>
            </div>
            <img
                src="https://placeimg.com/160/90/any" alt = "RandImg"
            />
            <div className='title'>{title}</div>
            <div className='channel'>{channel}</div>
            <div className='views'>
                {views} views <span>.</span> {time}
            </div>
            </div>
        </>
    );
}



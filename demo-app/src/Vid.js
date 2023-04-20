import './Vid.css'
export default function Vid({id,title,channel,views,time,verified}) {
    return(
        <>
            <div className='container'>
            <div className='pic'>
            </div>
            <img
                src={`https://picsum.photos/id/${id}/160/90`} alt = "RandImg"
            />
            <div className='title'>{title}</div>
            <div className='channel'>{channel} {verified?"✔️":null}</div>
            <div className='views'>
                {views} views <span>.</span> {time}
            </div>
            </div>
        </>
    );
}



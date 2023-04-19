function Avatar(){
    return(
        <img
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin"
            width={100}
            height={100}
        />
    );
}

export default function Profile(){
    return(<>
        <h1>Props in React</h1>
        <Avatar/>
        </>
    );
}
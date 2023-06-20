const user1 = {
    name:'Shivam',
    age:'26',
    imageUrl:"https://picsum.photos/200/300"
}

export default function profile(){
    return(
        <>
            <h1>{user1.name}</h1>
            <img
                className="images"
                src = {user1.imageUrl}

                style={{
                    width:300,
                    height:300
                }}

            />
        </>
    );
}
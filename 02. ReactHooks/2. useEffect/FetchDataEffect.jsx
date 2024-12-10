import { useEffect, useState } from "react";

const FetchDataEffect = () => {

    const [post , setPost] = useState([]);

    useEffect( ()=>{
        const fetchdata = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPost(data);
        }
        fetchdata();
    },[])
    return(
        <div>
            {post && post.length ? <h2>{post[0].title}</h2> : <h2>Loading ...</h2>}
        </div>
    )
}

export default FetchDataEffect;
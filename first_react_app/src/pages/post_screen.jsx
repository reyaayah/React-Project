import { useEffect, useState } from "react";
import PostCard from "../components/postcard";
const PostScreen=()=>{
    const [allPosts,setAllPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(
            async(res)=>{
                const posts=await res.json()
                setAllPosts(posts)
            }
        )
    },[]
)
    return(
        <div id="all-posts">
            {
                allPosts.map(
                    (post)=>{
                        return <PostCard post={post}/>
                    }
                )

            }
            
        </div>
    )
}
export default PostScreen
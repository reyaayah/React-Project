import "../styles/postcard.css"
const PostCard =({post})=>{
    return(
        <>
        <div className="post-card">
        <div className="id-container">
            {post.id}
        </div>
        <div className="title-desc">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
        </div>
        </div>
        
        </>
    )
}
export default PostCard
import Link from "next/link"

function Comments({ comments }) {
    //console.log(comments);
    return(
        <div>
            <h1>All Comments:</h1>
            {comments.map(comment =>
                <div>
                    <h4>Id :{comment.id}</h4>
                    <Link href={`/comments/${comment.id}`}>
                        <h3>Name :{comment.name}</h3>
                    </Link>
                    <p>Comments : {comment.body}</p>
                </div>
            )}
        </div>
    )
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { comments: data.slice(0, 15) } }
  }
  
  export default Comments

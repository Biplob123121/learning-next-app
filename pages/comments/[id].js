
export default function SingleComment(comment) {
    //console.log(comment)
  return (
    <div>
        <h1>Single Comment:</h1>
        <h3>Name : {comment.comment.name}</h3>
        <p>Comment : {comment.comment.body}</p>
    </div>
  )
}

export async function getServerSideProps(context) {

    const {params} = context;

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { comment: data} }
  }

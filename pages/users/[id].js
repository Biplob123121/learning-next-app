
export default function SingleUser({user}) {
  //console.log(user);
  return (
    <div>
        <h1>Single User: {user.id}</h1>
        <h3> User Name : {user.name}</h3>
        <h4>User Email : {user.email}</h4>
        <p>Address : {user.address.street}</p>
    </div>
  )
}

// Generates 
export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();

    const paths = data.map(user =>{
        return{
            params : {id: `${user.id}`}
        };
    })

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
  
    const {params} = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json();

    return {
      // Passed to the page component as props
      props: { user: data },
    }
  }

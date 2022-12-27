import Link from "next/link";

function User({ data }) {
    //console.log(data);

    return(
        <div>
            <h1>All User:</h1>
            {data.map(user =>
                <div key={user.id}>
                    <Link href={`/users/${user.id}`} passHref>
                       <h3>{user.name}</h3>
                    </Link>  
                    <h4>{user.email}</h4>
                    <hr />
                </div>)}
        </div>
    )
  }
  
  export async function getServerSideProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
  

    return { props: { data } }
  }
  
  export default User;
  


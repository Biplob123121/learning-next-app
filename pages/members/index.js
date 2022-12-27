import { useState } from "react"

export default function Members() {

    const [members, setMembers] = useState([]);
    const [member, setMember] = useState("");

    const loadMembers = () =>{
        fetch('api/members')
        .then(res => res.json())
        .then(data => setMembers(data));
    }

    const AddNewMember = () =>{
        fetch("api/members", {
            method : "POST",
            body : JSON.stringify({member}),
            headers : {"Content-Type" : "application/json"}
        })

        loadMembers();
    }

    const deleteMember = (id) =>{
        fetch(`api/members/${id}`, {
            method : "DELETE",
        })

        loadMembers();
    }


  return (
    <div>
        <h1>My Family Members : </h1>
        <div>
            <input type="text" onChange={e =>setMember( e.target.value)} />
            <button onClick={AddNewMember}>Add Members</button>
        </div>
        <button onClick={loadMembers}>Show Members</button>
        {
            members.map(member =>
                <div key={member.id}>
                    <hr />
                    <h3>Name : {member.name}</h3>
                    <h4>Contact : {member.phone}</h4>
                    <button onClick={() =>deleteMember(member.id)}>Delete Member</button>
                </div>)
        }
    </div>
  )
}

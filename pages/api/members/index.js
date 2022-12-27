import {members} from "../../../familyData";

export default function handler(req, res) {
    if(req.method === "GET"){
        res.status(200).json(members);
    }
    else if(req.method === "POST"){
        const member = req.body.member;
        const newMember = {
            id : Date.now,
            name : member,
            phone : "+8801750659659"
        }
        members.push(newMember);
        res.status(201).json({message : "Member is added!!"})
    }
    // if(req.method === "GET"){

    // }
    
  }
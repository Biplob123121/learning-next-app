import {members} from "../../../familyData";

export default function handler(req, res) {
    const {memberId} = req.query;

    if(req.method === "GET"){
        const member = members.find(member => member.id == parseInt(memberId));
        res.status(200).json(member);
    }
    if(req.method === "DELETE"){

        const index = members.find(member => member.id == parseInt(memberId));
        members.splice(index, 1)
        res.status(200).json({message : "Member is deleted"});
    }
    
  }
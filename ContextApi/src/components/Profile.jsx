import React, {useContext} from "react";
import usercontext from "../context/usercontext";
function Profile()
{
    const {user}= useContext(Usercontext);
    if(!user)
    {
        return(
            <div>Please Login!</div>
        );
    }
    
        return(
            <div>Welcome {user.username}</div>
        );
    
}
export default Profile;
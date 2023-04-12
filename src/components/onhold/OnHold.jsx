import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom';

function OnHold() {
    const userCon = useContext(UserContext);
    const [user, setUser] = useState(userCon);
    const navigate = useNavigate();

    useEffect(() => {
        if(user == ""){
            navigate("/login", { replace: true})
        }
    }, [user])
    
    return (
        <div>
            <Header userName={{ username: user }}/>
        </div>
    )
}

export default OnHold
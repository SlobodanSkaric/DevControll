import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';

function OnHold() {
    const [user, setUser] = useState();
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
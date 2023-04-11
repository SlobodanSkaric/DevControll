import React, { useContext, useState } from 'react'
import Header from '../Header'
import { UserContext } from '../../App';

function InProgess() {
    const userCon = useContext(UserContext);
    const [user, setUser] = useState(userCon);
    
    return (
        <div>
            <Header userName={{ username: user }}/>
        </div>
    )
}

export default InProgess
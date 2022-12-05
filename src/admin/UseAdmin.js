

import { React, useEffect, useState } from 'react';

const UseAdmin = email => {
    const [isAdmin, setisAdmin] = useState(false)
    const [isloadingad, setisLoadingad] = useState(true)
    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setisAdmin(data.isAdmin)
                    setisLoadingad(false)
                })
        }



    }, [email])
    return [isAdmin, isloadingad];
};

export default UseAdmin;
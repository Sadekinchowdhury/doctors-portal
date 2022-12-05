import { React, useContext } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovide';

const Displayerror = () => {

    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const error = useRouteError()

    const handlLogout = () => {
        LogOut()
            .then(() => {
                navigate('/login')

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className="text-3xl text-red-600">
                Something went wrong.
            </p>
            <p className="text-3xl text-red-600">
                {
                    error.statusText || error.message
                }
            </p>
            <div className="h text-3xt">

                <button onClick={handlLogout} className="btn btn-outline btn-accent px-5">SignOut</button>

            </div>
        </div>
    );
};

export default Displayerror;
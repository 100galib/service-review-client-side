import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../UserAuthContex/UserAuthContex';

const Navigation = () => {
    const {user, logOut} = useContext(AuthContex);
    const logOutHandler = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error('error', error))
    }
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">AFG consultant</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/blog'}>Blog</Link></li>
                    {user?.uid ? 
                        <>
                        <li><Link to={'/myreview'}>My reviews</Link></li>
                        <li><Link to={'/addservices'}>Add service</Link></li>
                        <li><button onClick={logOutHandler} className="btn btn-ghost">Logout</button></li>
                        </>
                    : <li><Link to={'/login'}>Login</Link></li>}
                    
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
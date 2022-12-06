import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const MyReviewSingleItem = ({getUser, handleDeleate, notify}) => {
    const {_id, massage, name, serviceName} = getUser;

    return (
        <tr>
            <th>
                <button onClick={() => {handleDeleate(_id); notify()}} className="btn btn-warning">Deleate</button>
                <ToastContainer />
            </th>
            <td>
                {name}
            </td>
            <td>
                {massage}
            </td>
            <td>
                {serviceName}
            </td>
            <th>
                <Link to={`/updateUser`}><button className="btn btn-success">Edit review</button></Link>
            </th>
        </tr>
    );
};

export default MyReviewSingleItem;
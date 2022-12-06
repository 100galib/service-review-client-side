import React from 'react';

const UserFormDatabase = ({getUser}) => {
    const {massage, name, photo} = getUser;
    return (
        <tr>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Display" />
                    </div>
                </div>
            </div>
        </td>
        <td>
        <div>
            <div className="font-bold">{name}</div>
        </div>
        </td>
        <td className='w-2/5'>{massage}</td>
    </tr>
    );
};

export default UserFormDatabase;
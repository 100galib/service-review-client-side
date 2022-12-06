import React from 'react';

const Comments = ({item}) => {
    const {displayName, photoURL, comments} = item;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Display" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
            <div>
                <div className="font-bold">{displayName}</div>
            </div>
            </td>
            <td className='w-2/5'>{comments}</td>
        </tr>
    );
};

export default Comments;
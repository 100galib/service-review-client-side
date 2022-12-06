import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../UserAuthContex/UserAuthContex';
import MyReviewSingleItem from './MyReviewSingleItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../UseHook/UseTitle';

const Myreviews = () => {
    const [comment, setComment] = useState({});
    useTitle('My Review Section')
    const {user} = useContext(AuthContex);
    const notify = () => toast("Delete a Reviews");

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-100galib.vercel.app/message?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(doc => setComment(doc))
        .catch(error => console.error('error', error));
    }, [user?.email])
    const handleDeleate = id => {
        const proceed = window.confirm('Are you sure you want to deleate');
        if(proceed){
            fetch(`https://b6a11-service-review-server-side-100galib.vercel.app/message/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(doc => {console.log(doc)
                if(doc.deletedCount > 0){
                    const remaining = comment.filter(comm => comm._id !== id)
                    setComment(remaining)
                }
                })
            .catch(error => console.error('error', error))
        }
    }

    return (
        <>
            {comment.length === 0 ? <p className='text-5xl text-center mt-32 mb-28'>No reviews were added</p> :
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Comment</th>
                    <th>service name</th>
                    <th></th>
                </tr>
                </thead>
                    <tbody>
                        {
                            Object.values(comment).map(message => <MyReviewSingleItem key={message._id} getUser={message} handleDeleate={handleDeleate} notify={notify}></MyReviewSingleItem>) 
                        }
                    </tbody>
            </table>
        </div>
            }
        </>
    );
};

export default Myreviews;
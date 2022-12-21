import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../UseHook/UseTitle';
import { AuthContex } from '../../UserAuthContex/UserAuthContex';
import Comments from '../Comments/Comments';
import UserFormDatabase from '../userFromDatabase/UserFormDatabase';

const ServiceDetails = () => {
    const [userMessage, setUserMessage] = useState([]);
    const {user, loading} = useContext(AuthContex);
    const sindleData = useLoaderData();
    useTitle('user review')
    const {_id, title, img, price, description, review} = sindleData;
    console.log(sindleData)
    const addCommentsHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const photo = user?.photoURL;
        const massage = form.massage.value;

        const getMassage = {
            serviceId : _id,
            serviceName: title,
            email,
            name,
            photo,
            massage
        }
        fetch('https://b6a11-service-review-server-side-100galib.vercel.app/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(getMassage)
        })
        .then(res => res.json())
        .then(doc => {
            console.log(doc)
            if(doc.acknowledged){
                form.reset();
            }
        })
        .catch(error => console.error('error', error))
    }
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-100galib.vercel.app/message?email=${user?.email}`)
        .then(res => res.json())
        .then(doc => setUserMessage(doc))
        .catch(error => console.error('error', error));
    }, [user?.email])

    if(loading){
        return <div>Loading ........</div>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-9 mx-auto">
                <figure className="px-10 pt-10">
                    <img src={sindleData && img} alt="Service" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{sindleData && title}</h2>
                    <p className='font-bold'>Price: ${sindleData && price}</p>
                    <p>{sindleData && description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto w-3/5 mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review?.map((singleItem, index) => <Comments key={index} item={singleItem}></Comments>)
                        }
                        {
                         Object.values(userMessage)?.map(message => <UserFormDatabase key={message._id} getUser={message}></UserFormDatabase>) 
                        }
                    </tbody>
                </table>
            </div>
            {!user?.email ? <p className='text-4xl font-bold text-center my-6'>Please login to add a review '<Link className='text-sky-500' to={'/login'}>Login</Link>'</p> :
            <form onSubmit={addCommentsHandler} className='mx-auto grid grid-cols-1 w-2/5'>
                <h1 className='text-center text-2xl font-bold mb-4'>Give Your Review</h1>
                <textarea name='massage' className="textarea textarea-success mb-6" placeholder="Give your Review Here"></textarea>
                <button type='submit' className="btn btn-success mb-10">Add Review</button>
            </form>
            }
    </div>
    );
};

export default ServiceDetails;
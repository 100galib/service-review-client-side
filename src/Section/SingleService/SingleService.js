import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({allservice}) => {
    const {_id, title, img, price, description} = allservice;
    const shortDes = description.slice(0, 100)
    return (
        <div className="card card-side my-8 w-4/5 mx-auto bg-base-100 shadow-xl">
            <figure><PhotoProvider><PhotoView src={img}><img src={img} alt="Movie"/></PhotoView></PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold'>Service Charge: $ {price}</p>
                <p>{shortDes}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}><button className="btn btn-primary">view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
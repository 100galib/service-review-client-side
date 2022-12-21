import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../UseHook/UseTitle';
import SingleService from '../SingleService/SingleService';

const AllServices = () => {
    const allData = useLoaderData();
    useTitle('Services')
    return (
        <div>
            {
                allData && allData.map(service => <SingleService key={service._id} allservice={service}></SingleService>)
            }
        </div>
    );
};

export default AllServices;
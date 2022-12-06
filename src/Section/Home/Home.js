import React from 'react';
import { FaFacebookSquare, FaYoutube, FaInstagram, FaRegClock, FaGlobe, FaRocketchat } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../UseHook/UseTitle';
import Services from '../Services/Services';

const Home = () => {
    const allServices = useLoaderData();
    useTitle('AFG consultant')
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to my private consultancy firm</h1>
                    <p className="mb-5">I am a finance specialist. I have 30 years of experience in this field. 100+ consultancy i gave to client. </p>
                    <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content p-0 w-4/5 flex-col lg:flex-row">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="max-w-sm rounded-lg shadow-2xl" alt='personal_picture'/>
                        <div>
                        <h1 className="text-5xl font-bold">About My Self</h1>
                        <p className="py-6">My name is Mike Thomson. I am a professional finance specialist. I have completed M. Com in Finance from Michigan University, and done my Phd. at toronto. I have 200+ research journal. I have worked with many reputed company.My last project done with the world bank.</p>
                        <p className='font-bold'>Follow Me on</p>
                        <p className='flex mt-1'><Link><FaFacebookSquare className='text-2xl text-sky-500 mr-2'></FaFacebookSquare></Link> <Link><FaYoutube  className='text-2xl text-red-500 mr-2'></FaYoutube></Link> <Link><FaInstagram  className='text-2xl text-red-800'></FaInstagram></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid gap-3 w-11/12 mx-auto grid-cols-1 lg:grid-cols-3'>
                {
                    allServices.map(service => <Services key={service._id} allService={service}></Services>)
                }
            </div>
            <div className='text-center my-9'>
                <Link to={'/services'}><button className="btn btn-primary">See All</button></Link>
            </div>
            <hr />
            <div className='grid px-5 gap-5 my-24 mx-auto grid-cols-1 lg:grid-cols-3'>
                <div className='text-center border-2 rounded-lg py-3 '>
                    <FaRegClock className='text-4xl mx-auto text-emerald-500'></FaRegClock>
                    <h2 className='text-3xl font-bold'>Efficient support</h2>
                    <p>When you assist any help I will be always open. Efficient time management give a happy client</p>
                </div>
                <div  className='text-center border-2 rounded-lg py-3 '>
                    <FaGlobe className='text-4xl  mx-auto text-emerald-500'></FaGlobe>
                    <h2 className='text-3xl font-bold'>100% Customer Satisfaction</h2>
                    <p>I am working within the Full Globe. What I focused is 100% focused of the Client</p>
                </div>
                <div  className='text-center border-2 rounded-lg py-3 '>
                    <FaRocketchat className='text-4xl  mx-auto text-emerald-500'></FaRocketchat>
                    <h2 className='text-3xl font-bold'>Unlimited Taxt advice</h2>
                    <p>Virtual Will Assist you all the time. When any delay form my side you can clear your answer with the chat bot</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
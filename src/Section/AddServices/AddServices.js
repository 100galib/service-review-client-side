import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../UseHook/UseTitle';

const AddServices = () => {
    const notify = () => toast("Item Added Successfully");
    useTitle("Add Services")
    const addProductHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const addProduct = {
            title,
            img,
            price,
            description
        }
        fetch('https://b6a11-service-review-server-side-100galib.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
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
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5">Add Your Item</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={addProductHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name Of the Items</span>
                            </label>
                            <input type="text" name='title' placeholder="Give Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="imga url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Set a price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Give description of your product"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={notify} type='submit' className="btn btn-primary">Add to list</button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;
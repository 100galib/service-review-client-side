import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../UserAuthContex/UserAuthContex';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../UseHook/UseTitle';

const Login = () => {
    const {logInUser, googleSignin} = useContext(AuthContex);
    useTitle('Login');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const loginHandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            const currentUser = {
                email: user.email
            }

            fetch('https://b6a11-service-review-server-side-100galib.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(doc => {
                console.log(doc);
                localStorage.setItem('token', doc.token)
                navigate(from, {replace: true});
            })
        .catch(error => console.error('error', error))
            form.reset()
        })
        .catch(error => console.error('error', error));
    }
    const googleHandler = () => {
        googleSignin()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log('error', error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Log In with your Email And Password</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandle} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to={'/register'} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center font-bold'>Or</p>
                    <button onClick={googleHandler} className="btn btn-outline w-4/5 mx-auto my-2"><FaGoogle className='mr-3'></FaGoogle> Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
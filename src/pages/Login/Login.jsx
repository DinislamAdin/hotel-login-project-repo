import React, { useContext, useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook,FaGithub } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
        
    const { googleSignUp, loginUser, facebookSignUp, githubSignUp } = useContext(AuthContext);

    const handelLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified){
                    alert('your email is not verified');
                };
                setError('');
                form.reset();
                setSuccess('Login successfully');
                form.reset('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('');
            })
    };

    const handelGoogleSignUp = ()=>{
        googleSignUp()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handelGithubSinUp =()=>{
        githubSignUp()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handelFacebookSinUp =()=>{
        facebookSignUp()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h4 className='text-center'>LogIn Hear</h4>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-4'>first time in this website plice<Link to="/register">Register</Link></p>
            <div className='mt-5'>
                <h4 className='text-center'>SignIn With</h4>
                <div className='d-flex justify-content-around mt-3 mb-5'>
                    <p className='shadow p-3 mb-4 bg-white rounded'>
                        <span onClick={handelGoogleSignUp} className='text-warning'><FaGoogle className='me-3 ms-3' />Google</span>
                    </p>
                    <p className='shadow p-3 mb-4 bg-white rounded'>
                        <span onClick={handelGithubSinUp} className='text-secondary'><FaGithub className='me-3 ms-3' />Github</span>
                    </p>
                    <p className='shadow p-3 mb-4 bg-white rounded'>
                        <span onClick={handelFacebookSinUp} className='text-primary'><FaFacebook className='me-3 ms-3' />Facebook</span>
                    </p>
               </div>
            </div>
        </div>
    );
};

export default Login;
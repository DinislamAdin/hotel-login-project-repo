import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState()

    const { user, createUser, facebookSignUp, githubSignUp, googleSignUp, } = useContext(AuthContext);
    // console.log(createUser);

    const handelSignUp = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');
        setSuccess('');

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please enter one uppercase')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('please enter two number')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('please enter one spasil cracter')
            return;
        }
        else if (password.length < 8) {
            setError('password should longer then 8 digit');
            return;
        }
        else if (password !== confirm) {
            setError('enter valid confirm password');
            return;
        }
        createUser(email, password, name)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset('')
                setError('')
                setSuccess('Register successfully')
                sendVerificationEmail(result.user)
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('please verified your email')
            })
    }



    const handelGoogleSignUp = () => {
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelGithubSinUp = () => {
        githubSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handelFacebookSinUp = () => {
        facebookSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handelSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirm">
                    <Form.Label>Confirm  Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name='confirm' required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-4'>alreday have an account palece <Link to="/login">login</Link></p>
            <div className='mt-5'>
                <h4 className='text-center'>SignUp With</h4>
                <div className='d-flex justify-content-around mt-3'>
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

export default Register;
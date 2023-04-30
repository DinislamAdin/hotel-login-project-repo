import React from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-secondary p-2 mt-5'>
            <div className='d-flex text-white justify-content-around mt-3'>
                <div>
                    <h4>Contact Us</h4>
                    <p>Number: 017324562345</p>
                    <p>Number: 019234523452</p>
                    <p>email: dinislam.adin2004@gmail.com</p>
                </div>
                <div>
                    <h4>Fallow Us On</h4>
                    <p><FaGoogle className='me-3 ms-3' />Google</p>
                    <p><FaGithub className='me-3 ms-3' />Github</p>
                    <p><FaFacebook className='me-3 ms-3' />Facebook</p>
                </div>
            </div>
            <div>

            </div>
        </footer>
    );
};

export default Footer;
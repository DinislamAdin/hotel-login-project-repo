import React, { useContext, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Rooms = ({room}) => {
    const [change, setChange] =useState('Book Now');
    
    const {user} = useContext(AuthContext);
    const handelChange =()=>{
        if(user){
            setChange('Booked')
            return;
        }
        else{
            setChange('book now')
            return;
        }
    }

    console.log(room);
    const { roomName, id, image, description, price} =room;
    return (
        <div className='container col-4 shadow-sm p-3 mb-5 bg-white rounded'>
            <p>{roomName}</p>
            <img className='img-fluid rounded' src={image} alt="" />
            <p>{description}</p>
            <div className='d-flex justify-content-between align-items-center'>
                <p>Price: {price}</p>
                <div>
                {
                        user ? <p><button onClick={handelChange} className='me-2 ms-2 p-2 btn btn-primary'><FaBook className='me-2 ms-3' />{change}</button></p> : <Link to="/register"><button onClick={handelChange} className='me-2 ms-2 p-2 btn btn-primary'><FaBook className='me-2 ms-3' />{change}</button></Link>
                }
                </div>
                
            </div>
        </div>
    );
};

export default Rooms;
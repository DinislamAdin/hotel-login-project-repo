import React from 'react';

const Rooms = ({room}) => {
    console.log(room);
    const { roomName, id, image, description, price} =room;
    return (
        <div className='container col-4 shadow-sm p-3 mb-5 bg-white rounded'>
            <p>{roomName}</p>
            <img className='img-fluid rounded' src={image} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default Rooms;
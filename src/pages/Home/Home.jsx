import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rooms from '../Shared/Rooms/rooms';
import './Home.css';

const Home = () => {
    const rooms = useLoaderData();
    return (
        <div >
            <div className='home' style={{
                backgroundImage: `url("https://mc-6411c2dd-ed8a-41b8-8a34-7690-cdn-endpoint.azureedge.net/mhb-media/regions/asia/siingapore/orchardhotelsingapore/generic/images/orchard-hero.jpg?rev=6d0c049436554925ad2859026a558e50")`,
                backgroundSize: "cover"
            }}>
                <h4>hello world</h4>
            </div>
            <div className='row m-2'>
                {
                    rooms.map(room => <Rooms
                        key={room.id}
                        room={room}
                    ></Rooms>)
                }
           </div>
        </div>
    );
};

export default Home;
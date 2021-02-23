import React from 'react';
import './Sidebar.css';
import Channel from './Channel';
import cleverprogrammer from './cleverprogrammer.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <h5>FOLLOWED CHANNELS</h5>
                <Channel 
                    avatar={cleverprogrammer}
                    name='cleverprogrammer'
                    followers='820k' 
                />
                <Channel 
                    avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/b1763715-7b44-4d46-8d9d-f3ca6d17bdcb-profile_image-300x300.png'
                    name='piNNyBoy'
                    followers='200k' 
                />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel
                    avatar="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/s320x320/109578163_965495383966281_5674438860340488646_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=44OhGKqXRiEAX9qU1kZ&tp=1&oh=3c590a2dec2b98e3efa2d0cb87f6c184&oe=605CD28A"
                    name='@davidrakosi'
                    followers='1352' 
                />
                <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className='sidebar__bottomContainer'>
                    <i className="fas fa-search"></i>
                    <input type='text' placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

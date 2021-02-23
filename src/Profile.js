import React from 'react';
import './Profile.css';

import cleverprogrammer from './cleverprogrammer.png';
import RecentItem from './RecentItem';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'>
                <img src={cleverprogrammer} />
                <div className='profile__topLeftDetails'>
                    <h1>cleverprogrammer</h1>
                    <h3>820k followers</h3>
                </div>
            </div>

            <div className='profile__topRight'>
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>

            <div className='profile__menu'>
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div>

            <div className='profile__recent'>
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, ExpressJS, React, NodeJS)'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/DFzP6gA0tkQ'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, ExpressJS, React, NodeJS)'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/l1yXs-7RU5E'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, ExpressJS, React, NodeJS)'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/embed/5NlVMTYGlwg'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, ExpressJS, React, NodeJS)'}
                    />
                </div>
                <div className="profile__categories">
                    <h2>cleverprogrammer's recently streamed Categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" />
                    <h3>Science & Technology</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile

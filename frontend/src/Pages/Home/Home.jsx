import React from 'react';
import Footer from '../../components/Footer/Footer'
import Headerimg from '../../Assets/Group.jpg'
import { Link } from 'react-router-dom';

import './home.scss'
import HomeBid from '../../components/homeBid/HomeBid';
import profile from '../../Assets/profile.jpg'


const Home = () => {
    return (
        <div>
            {/* Header */}
            <div className="header">
                <img src={Headerimg} alt="" />
                <div>
                <Link to="/user"> <div className="profile-box">
                   <div className="profilename">
                   <span>Logined as</span>
                    <h3>Hotel</h3>
                    
                   </div>
                <img src={profile}/>

                </div> </Link>
                <button className="logout-box" onClick={}>Logout</button>
                </div>
            </div>
            <HomeBid />
            {/* Footer */}
            <Footer/>
        </div>
    );
};


export default Home;

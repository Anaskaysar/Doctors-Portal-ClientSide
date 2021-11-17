import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointMentBanner from '../AppointMentBanner/AppointMentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Services></Services>
            <AppointMentBanner></AppointMentBanner>
            <Doctors/>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import MarqueeSection from '../Marquee/MarqueeSection';
import SecureCard from '../SecureCard/SecureCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueeSection></MarqueeSection>
            <SecureCard></SecureCard>
        </div>
    );
};

export default Home;
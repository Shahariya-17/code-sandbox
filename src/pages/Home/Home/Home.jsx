import React from 'react';
import Banner from '../Banner/Banner';
import MarqueeSection from '../Marquee/MarqueeSection';
import SecureCard from '../SecureCard/SecureCard';
import BuiltSection from '../BuiltSection/BuiltSection';
import StackSection from '../StackSection/StackSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueeSection></MarqueeSection>
            <SecureCard></SecureCard>
            <BuiltSection></BuiltSection>
            <StackSection></StackSection>
        </div>
    );
};

export default Home;
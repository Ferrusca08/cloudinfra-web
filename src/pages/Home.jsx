import React from 'react';
import HeroSection from '../components/HeroSection';
import SplitBusiness from '../components/SplitBusiness';
import WhyChooseUs from '../components/WhyChooseUs';
import WorkflowTimeline from '../components/WorkflowTimeline';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <SplitBusiness />
            <WhyChooseUs />
            <WorkflowTimeline />
        </main>
    );
};

export default Home;

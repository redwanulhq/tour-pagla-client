import React from 'react';
import Cover from './Cover/Cover';
import './Home.css'
import Review from './Review/Review';
import Tours from './Tours/Tours';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
     return (
          <main id="home">
               <Cover></Cover>
               <Tours></Tours>
               <WhyUs></WhyUs>
               <Review></Review>
          </main>
     );
};

export default Home;
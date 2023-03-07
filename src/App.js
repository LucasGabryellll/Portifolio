import React from 'react';

import {
  About,
  Banner,
  Contact,
  Header,
  Nav,
  Services,
  Work
} from './components';

export default function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />

      <div className='h-[120px]'></div>
    </div>
  );
}
import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import LatestNews from '../components/home/LatestNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <LatestNews />
    </>
  );
}
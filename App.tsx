import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { NotificationsSection } from './components/NotificationsSection';
import { CirclesSection } from './components/CirclesSection';
import { HackathonSection } from './components/HackathonSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-deepViolet antialiased selection:bg-electricPurple selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <EventsSection />
        <NotificationsSection />
        <CirclesSection />
        <HackathonSection />
        <OpportunitiesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
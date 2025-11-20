import React from 'react';
import Background from './components/Background';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import { PORTFOLIO_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-void-900 text-white relative selection:bg-crimson-900 selection:text-white">
      <Background />
      
      <main className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col min-h-screen">
        <ProfileHeader />
        
        <div className="flex flex-col gap-4 pb-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
              Selected Works
            </h2>
            <div className="h-[1px] flex-grow ml-4 bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          
          {PORTFOLIO_LINKS.map((item, index) => (
            <LinkCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
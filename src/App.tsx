import { useMemo } from 'react';
import CandidateList from './components/CandidateList';
import { initialCandidates } from './data/initialCandidates';
import logoImg from '../public/WhatsApp Image 2025-11-15 à 15.56.33_05e2a873.jpg';

function App() {
  const sortedCandidates = useMemo(() => {
    return [...initialCandidates].sort((a, b) => {
      if (b.votes !== a.votes) return b.votes - a.votes;
      return a.id - b.id;
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          zIndex: -2
        }}
      />
      <div className="fixed inset-0 bg-black/70" style={{ zIndex: -1 }} />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex flex-col items-center mb-12">
          <img
            src={logoImg}
            alt="Logo"
            className="h-40 w-40 object-cover rounded-full border-4 border-white mb-8 shadow-2xl"
          />

          <h1 className="text-5xl md:text-6xl font-bold text-white text-center leading-tight">
            Classement des Candidats
          </h1>
        </div>

        <CandidateList candidates={sortedCandidates} />
      </div>
    </div>
  );
}

export default App;

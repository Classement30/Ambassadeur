import { useMemo } from 'react';
import { X } from 'lucide-react';
import CandidateList from './components/CandidateList';
import { initialCandidates } from './data/initialCandidates';
import logoImg from '../public/WhatsApp Image 2025-11-15 à 15.56.33_05e2a873.jpg';
import logo2Img from '../public/WhatsApp Image 2025-11-19 at 01.25.59.jpeg';

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
          <div className="flex items-center justify-center gap-8 mb-8">
            <img
              src={logoImg}
              alt="Logo 1"
              className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-2xl"
            />
            <X size={48} className="text-white flex-shrink-0" strokeWidth={3} />
            <img
              src={logo2Img}
              alt="Logo 2"
              className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white text-center leading-tight mb-6">
            Classement des Candidats
          </h1>

          <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl px-4 leading-relaxed">
            Découvrez le classement en temps réel de tous les candidats. Chaque vote compte pour déterminer les ambassadeurs qui représenteront notre communauté.
          </p>
        </div>

        <CandidateList candidates={sortedCandidates} />
      </div>
    </div>
  );
}

export default App;

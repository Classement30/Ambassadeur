import type { Candidate } from '../types';

export const initialCandidates: Candidate[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Candidat ${i + 1}`,
  votes: Math.floor(Math.random() * 500) + 50,
}));

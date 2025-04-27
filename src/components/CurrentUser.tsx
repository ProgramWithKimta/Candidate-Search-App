import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface currentUser {
  listOfCandidates: Candidate[],
  removeFromStorage: () => void
}

const candidateList = ({ listOfCandidates, removeFromStorage}: currentUser) => {
  console.log(listOfCandidates);

  return (
    <>
      <ul>
        {listOfCandidates.map((candidate) => (
          <CandidateCard
            currentUser={candidate}
            key={candidate.name}
            removeFromStorage={removeFromStorage}
          />
        ))}
      </ul>
    </>
  );
};

export default candidateList;
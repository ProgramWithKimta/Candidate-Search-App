import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  currentUser: Candidate;
  removeFromStorage?: () => void;
  addToCandidateList?: () => void;
};

const CandidateCard = ({currentUser, removeFromStorage, addToCandidateList}: CandidateCardProps) => {
  return (
    <>
      {currentUser?.name ? (
        <section>
          <figure>
            <img src={currentUser.avatar_url} />
          </figure>
          <article className='details'>
            {currentUser.name}
            {currentUser.location}
            {currentUser.email}
            {currentUser.company}
            {currentUser.bio}
          </article>
        </section>
      ) : (
        <h1>Please search for a Candidate</h1>
      )}
    </>
  );
};

export default CandidateCard;
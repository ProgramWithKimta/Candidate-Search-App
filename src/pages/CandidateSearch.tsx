import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>();

  const [searchInput, setSearchInput] = useState<string>('');

  // function for searching for a candidate by name using the github user API
  const searchForCandidateByName = async (event: React.FormEvent, candidate_name: string) => {
    event.preventDefault();
    const data = await searchGithubUser(candidate_name);
    setCurrentCandidate(data)l
  };
  
  return (
    <>
    <section id='searchSection'>
      <form
        onSubmit={(event: React.FormEvent) => searchForCandidateByName(event, searchInput)}
      >
        <input
          type='text'
          name=''
          id=''
          placeholder='Candidate Name'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type='submit' id='searchBtn'>
          Search
        </button>
      </form>
    </section>
    <FilmCard
      currentFilm={currentFilm}
      addToWatchList={addToWatchList}
      addToSeenItList={addToSeenItList}
    />
  </>
);
};
  )
};

export default CandidateSearch;

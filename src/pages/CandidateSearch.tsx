import { useState} from 'react';
import { searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentUser, setCurrentUser] = useState<Candidate>();

  const [searchInput, setSearchInput] = useState<string>('');

  const addToCandidateList = () => {
    if(!currentUser) return;

    let parsedUsersToAdd: Candidate[] = [];
    const storedUsersToAdd = localStorage.getItem('addToList');
    if (typeof storedUsersToAdd === 'string') {
      parsedUsersToAdd = JSON.parse(storedUsersToAdd);
    }
    parsedUsersToAdd.push(currentUser);
    localStorage.setItem('addToList', JSON.stringify(storedUsersToAdd));
  };

  const searchCandidateByName = async (event: React.FormEvent, candidate_name: string) => {
    event.preventDefault();
    const data = await searchGithubUser(candidate_name);

    setCurrentUser(data);
  };

  return (
    <>
      <section id='searchSection'>
        <form

          onSubmit={(event: React.FormEvent) => searchCandidateByName(event, searchInput)}
        >
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter a Candidate Name'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        currentUser={currentUser}
        addToCandidateList={addToCandidateList}
      />
    </>
  );
};

export default CandidateSearch;

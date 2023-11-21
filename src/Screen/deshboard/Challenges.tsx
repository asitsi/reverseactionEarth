import {useState} from 'react';
import ChallengesTable from '../../components/ChallengesTable';
import CreateNewChallenges from '../../components/CreateNewChallenges';

const Challenges = () => {
  const [createChallengesScreen, setCreateChallengesScreen] = useState<Boolean>(false);

  return (
    <div className="Main_Container">
      <div className={`slide-content ${createChallengesScreen ? 'slide-in' : 'slide-in'}`}>
        {createChallengesScreen ? <CreateNewChallenges setCreateChallengesScreen={setCreateChallengesScreen}/> : <ChallengesTable setCreateChallengesScreen={setCreateChallengesScreen} /> }
      </div>
    </div>
  )
}

export default Challenges


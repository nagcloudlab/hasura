import logo from './logo.svg';
import './App.css';

import { gql, useQuery } from '@apollo/client';
import SessionCard from './SessionCard';

const GET_SESSIONS = gql`
  query allSessions{
    sessions{
      title
      speakers{
        name
        bio
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_SESSIONS);
  const renderSessions = () => {
    if (data)
      return data.sessions.map((s, idx) => {
        return <SessionCard key={idx} session={s} />
      })
  }
  return (
    <div className="container">
      <hr />
      <div>tng-lab : apollo-react-client</div>
      <hr />
      <div className=''>
        {renderSessions()}
      </div>
    </div>
  );
}

export default App;

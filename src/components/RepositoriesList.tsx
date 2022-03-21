import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositories(term))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={term}
          onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList

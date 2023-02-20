import React, { useReducer, useState } from "react";
import { actionCreators } from "../state";
import repositoriesReducer from "../state/reducers/repositoriesReducer";
import { initialState } from "../state/reducers/repositoriesReducer";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const [repositoriesState, dispatch] = useReducer(
    repositoriesReducer,
    initialState
  );
  const { loading, error, data } = repositoriesState;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionCreators.searchRepositories(term, dispatch);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;

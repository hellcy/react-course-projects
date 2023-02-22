import React, { createContext, useContext, useReducer } from "react";
import { Action } from "../actions";
import repositoriesReducer, {
  initialState,
  RepositoriesState,
} from "../reducers/repositoriesReducer";

interface RepositoriesContextProviderProps {
  children: React.ReactNode;
}

interface RepositoriesContextProps {
  repositoriesState: RepositoriesState;
  dispatch: React.Dispatch<Action>;
}

export const RepositoriesContext = createContext<RepositoriesContextProps>({
  repositoriesState: initialState,
  dispatch: (action: Action) => {},
});

export const RepositoriesContextProvider: React.FC<
  RepositoriesContextProviderProps
> = ({ children }) => {
  const [repositoriesState, dispatch] = useReducer(
    repositoriesReducer,
    initialState
  );
  return (
    <RepositoriesContext.Provider value={{ repositoriesState, dispatch }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositoriesContext = () => useContext(RepositoriesContext);

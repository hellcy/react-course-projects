import { RepositoriesContextProvider } from "../state/contexts/repositoriesContext";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <RepositoriesContextProvider>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </RepositoriesContextProvider>
  );
};

export default App;

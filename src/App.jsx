import { UserDataContextProvider } from "./context/UserDataContext";
import { FormContextProvider } from "./context/FormContext";
import { NavBar } from "./components/NavBar";
import { UserManagement } from "./components/UserManagement";

function App() {
  return (
    <FormContextProvider>
      <NavBar />
      <UserDataContextProvider>
        <UserManagement />
      </UserDataContextProvider>
    </FormContextProvider>
  );
}

export default App;

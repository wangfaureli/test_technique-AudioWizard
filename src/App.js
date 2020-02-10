import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Layout from "./Layout/Layout";

export const UsernameContext = React.createContext(null);

function App() {
  const [username, setUsername] = React.useState("");

  function updateUsername(newUsername) {
    setUsername(newUsername);
  }

  return (
    <Router>
      <UsernameContext.Provider value={{ username, updateUsername }}>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </UsernameContext.Provider>
    </Router>
  );
}

export default App;

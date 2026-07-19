import React, { useContext } from 'react';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import AuthContext from '../contexts/Auth';
import Login from './Login';
import EditDeveloper from './EditDeveloper';
import SearchDevelopers from './SearchDevelopers';

function App(){
  const { isLoggedIn } = useContext(AuthContext);

  return (
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/developers" element={ <DisplayBios /> } />
          {
            isLoggedIn
            ?
              <Route path="/developers/add" element={ <AddDeveloper /> }/>
            
            :
              <></>
          }
          <Route path="/login" element={ <Login />} />
          <Route data-testid="edit-developer-route" path="/edit/:id" element={<EditDeveloper />} />
          <Route path="/search" element={<SearchDevelopers />} />
        </Routes>
      </Router>
    ); 
}

export default App;

import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewAppointment from './pages/NewAppointment';
import AuthPage from './pages/AuthPage';
import ConfirmedAppointment from './pages/ConfirmedAppointment';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/scheduleAppointment/new' element={ <NewAppointment /> }/>
        <Route path='/confirmedAppointment' element={ <ConfirmedAppointment /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;

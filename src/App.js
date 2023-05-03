import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

// import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
// import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import DoctorPage from './pages/DoctorPage';
import SpecialistPage from './pages/SpecialistPage';
import { getUser } from './utilities/users-service';
import EditDoc from './pages/EditDoc';
import './App.css';
import NewDoctorFormPage from './pages/NewDoctorFormPage';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        {/* <Route path='/orders/new' element={ <NewOrderPage /> }/>
            <Route path='/orders' element={<OrderHistoryPage />} /> */}
            <Route path='/specialist' element={<SpecialistPage />} />
            <Route path='/doctor' element={<DoctorPage />} />
            <Route path='/doctors/new' element={<NewDoctorFormPage/>}/>
            <Route path='/edit/:id' element={<EditDoc />} />
            
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
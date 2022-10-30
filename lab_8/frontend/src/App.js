import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
// import Account from './components/Account'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (<Router>
        <div className='content'>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            {/*<Route path="/account" element={<Account />} />*/}
          </Routes>
        </div>
      </Router>
  );
}

export default App;

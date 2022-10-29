import './App.css';
import About from './component/task_1/About';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>
        <div className='content'>
          <Routes>
            <Route index path="/" element={<About />} />
            {/*<Route path="/catalog" element={<Catalog />} />*/}
          </Routes>
        </div>
      </Router>
  );
}


export default App;

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsentForm from './pages/Consent.jsx';
import Questionnaire from './pages/Questionnaire.jsx';
import Home from './pages/Home';
import InformationSheet from './pages/Information.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<InformationSheet />} />
          <Route path="/app" exact element={<Home />} />
          <Route path="/consent"  element={<ConsentForm />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
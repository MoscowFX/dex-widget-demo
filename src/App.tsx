import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import WidgetPage from './WidgetPage';
import newpage2 from './NewPage2';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App container">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/widget" element={<WidgetPage />} />
          <Route path="/NewPage2" element={<NewPage2 />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

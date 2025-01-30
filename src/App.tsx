import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import WidgetPage from './WidgetPage';
import WidgetPage2 from './newpage2';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App container">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/widget" element={<WidgetPage />} />
          <Route path="/widget" element={<WidgetPage2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

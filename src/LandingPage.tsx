import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h2>Добро пожаловать в мое первое DEX приложение!</h2>
      <p> Попробуй все очарование интегрированного виджета OKX DEX Widget.</p>
      <Link to="/widget">
        <button>Go to DEX Widget</button>
      </Link>
    </div>
  );
};

export default LandingPage;

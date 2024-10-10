import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/widget', label: 'DEX Widget' }
  ];

  return (
    <nav className="cool-nav">
      <div className="nav-background">
        <div className="nav-blob"></div>
      </div>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={item.path} 
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
              {(hoverIndex === index || location.pathname === item.path) && (
                <span className="nav-indicator" />
              )}
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="nav-chain">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="chain-link" style={{animationDelay: `${i * 0.1}s`}} />
        ))}
      </div> */}
    </nav>
  );
};

export default Navigation;
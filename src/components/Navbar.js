import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';




const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (query.trim()) navigate(`/search/${query}`);
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">MovieDb</Link>
      <div className="d-flex">
        <Link to="/" className="nav-link">Popular</Link>
        <Link to="/top-rated" className="nav-link">Top Rated</Link>
        <Link to="/upcoming" className="nav-link">Upcoming</Link>
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-light" onClick={handleSearch}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

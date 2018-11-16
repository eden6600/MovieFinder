import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expend-lg navbar-dark bg-info py-0 mb-4">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="fas fa-film mr-2" />
          Movie Finder
        </a>
      </div>
    </nav>
  );
}

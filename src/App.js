import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/items/Items';
import './app.css';

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Items />
      </div>
      <Footer />
    </div>
  );
}

export default App;

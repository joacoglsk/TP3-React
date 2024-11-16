import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdivinanzaContainer from './components/AdivinanzaContainer';

const App = () => (
  <div>
    <Header />
    <main>
      <AdivinanzaContainer />
    </main>
    <Footer />
  </div>
);

export default App;

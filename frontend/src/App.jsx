import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
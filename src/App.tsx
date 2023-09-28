import { useState, useEffect } from 'react';
import './App.css';
import info from './info';
import Loading from './Loading';
//import Tours from './tours';
import Home from './home';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(info);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2> No tours left </h2>
          <button
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={() => {
              fetchTours();
              setTours(info); // Reset the tour data
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Home home={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

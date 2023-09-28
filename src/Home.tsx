import React from 'react';
import { useState } from 'react';

interface Tours {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface HomeProps {
  home: Tours[];
  removeTour: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ home, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {home.map((tour) => (
          <article className="single-tour">
             <img src={tour.image} alt={tour.title} className="img" />
             <span className="tour-price">{tour.price}</span>
              <div className="tour-info">
              <h5>{tour.title}</h5>
              <p>
             {readMore ? tour.description : `${tour.description.substring(0, 200)}...`}
                <button className="info-btn" onClick={() => setReadMore(!readMore)}>
                     {readMore ? 'See less' : 'Read more'}
                     </button>
                   </p>
                   <button className="delete-btn btn-block btn" onClick={() => removeTour(tour.id)}>
                    Not interested
                </button>
               </div>
            </article>
        ))}
      </div>
    </section>
  );
};

export default Home;

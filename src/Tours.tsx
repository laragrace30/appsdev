// Tours.tsx
import React, { useState } from 'react';

interface ToursProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  removeTour: (id: number) => void;
}

const Tours: React.FC<ToursProps> = ({ id, title, description, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={title} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{title}</h5>
        <p>
          {readMore ? description : `${description.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See less' : 'Read more'}
          </button>
        </p>
        <button className="delete-btn btn-block btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tours;

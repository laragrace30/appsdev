import Tours from './Tours'; 

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

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {home.map((tour) => (
          <Tours
            key={tour.id}
            id={tour.id}
            title={tour.title}
            description={tour.description}
            image={tour.image}
            price={tour.price}
            removeTour={removeTour}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

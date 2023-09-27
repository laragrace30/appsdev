import { useState } from 'react';
import './App.css'


const ExpandableText = ({ children, descriptionLength }) => {
  const fullText = children;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className='text'>
      {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
      <span onClick={toggleText} className='info-btn'>
        {isExpanded ? 'Show less' : 'Read more'}
      </span>
    </p>
  );
};

function App() {

  return (
   <main>
  <section>
    <div className="title">
      <h1>Our Tours</h1>
      <div className="title-underline"></div>
    </div>
    <div className="tours">
      <article className="single-tour">
        <img src="src\assets\Paris.jpg" alt="Best of Paris in 7 days tour" className="img" />
        <span className="tour-price">$1,995</span>
        <div className="tour-info">
          <h5>Best of Paris in 7 Days Tour</h5>
          <p><ExpandableText descriptionLength={199}>
          Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, 
          and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City 
          of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite 
          Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through 
          the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, 
          colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!
              </ExpandableText></p>
          <button className="delete-btn btn-block btn">Not Interested</button>
        </div>
      </article>
      <article className="single-tour">
          <img src="src\assets\Ireland.jpg" alt="Best of Ireland in 14 days tour" className="img" />
          <span className="tour-price">$3,895</span>
          <div className="tour-info">
            <h5>Best of Ireland in 14 Days Tour</h5>
            <p><ExpandableText descriptionLength={200}>
             Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's
             must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including
             Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's
             Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their
             stories to draw you in to the Emerald Isle, and the friendliness of the people will surely
             steal your heart. Join us for the Best of Ireland in 14 Days!
              </ExpandableText></p>
            <button className="delete-btn btn-block btn">Not Interested</button>
          </div>
        </article>
        <article className="single-tour">
          <img src="src\assets\Salzburg & Vienna.jpg" alt="Best of Salzburg & Vienna in 8 days tour" className="img" />
          <span className="tour-price">$2,695</span>
          <div className="tour-info">
            <h5>Best of Salzburg & Vienna in 8 Days Tour</h5>
            <p><ExpandableText descriptionLength={200}>
              Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the
              gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this
              region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt,
              monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way.
              Join us for the Best of Munich, Salzburg & Vienna in 8 Days!
            </ExpandableText></p>
            <button className="delete-btn btn-block btn">Not Interested</button>
          </div>
        </article>
        <article className="single-tour">
          <img src="src\assets\Rome.jpg" alt="Best of Rome in 7 days tour" className="img" />
          <span className="tour-price">$2,095</span>
          <div className="tour-info">
            <h5>Best of Rome in 7 Days Tour</h5>
            <p><ExpandableText descriptionLength={200}>
              Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history,
              and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient
              Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras,
              you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery.
              You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to
              explore on your own. Join us for the Best of Rome in 7 Days!
            </ExpandableText></p>
            <button className="delete-btn btn-block btn">Not Interested</button>
          </div>
        </article>
        <article className="single-tour">
          <img src="src\assets\Poland.jpg" alt="Best of Poland in 10 days tour" className="img" />
          <span className="tour-price">$2,595</span>
          <div className="tour-info">
            <h5>Best of Poland in 10 Days Tour</h5>
            <p><ExpandableText descriptionLength={200}>
              Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated
              elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side,
              you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary
              capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city.
              In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover.
              Join us for the Best of Poland in 10 Days!
            </ExpandableText></p>
            <button className="delete-btn btn-block btn">Not Interested</button>
          </div>
        </article>
    </div>
    <div className="title">
      <h2>No Tours Left</h2>
    <button className="btn">Refresh</button>
    </div>
  </section>
   </main>
  )
}

export default App

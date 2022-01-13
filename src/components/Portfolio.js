import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <main className="portfolio">
      <Link to="/">
        <button className="portfolio-button">Home</button>
      </Link>
      <Link to="/contact">
        <button className="portfolio-button">Contact</button>
      </Link>
      <header className="header">Portfolio</header>
      <a href='http://telfar-wishlist.surge.sh/'><p>You get a Telfar!</p></a>
      <a href="http://telfar-wishlist.surge.sh/">
        <img className='telfar-img' src="/images/telfar.png" width="500" alt="telfar" />
      </a>
      <br></br>
      <br></br>
      <section>
        Fashion is my first love. I can spend hours on end curating wishlists of 
        items for the perfect occasion. Hey, a girl can dream right? I'm also an 
        advocate for Black-Owned brands. One of my favorites is Telfar. I created 
        a simple web app that allows you to add Telfar bags to your wishlist. 
        Being that Telfar bags usually sell-out within minutes of releasing, 
        why not keep track of your future purchases with this simple app?
        <p>Technologies: JavaScript* CSS* HTML* React*</p>
      </section>
    </main>
  );
};

export default Portfolio;

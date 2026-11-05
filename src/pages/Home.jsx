import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="banner">
        <img src="/images/ipoh.jpg" alt="Ipoh's Mirror Lake" />
        <div className="banner-text">
          <h2>Discover Malaysia and Create Lasting Memories Today!</h2>
          <p>
            Professionally handpicked travel packages to Malaysia's best
            highlands, islands and cities.
          </p>
          <Link to="/packages" className="banner-button">
            View our Packages
          </Link>
        </div>
      </div>


    </div>
  );
}
export default Home;

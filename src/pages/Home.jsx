import { Link } from "react-router-dom";
import { useState } from "react";

// list of the slides for the banners
const slides = [
  { image: "/images/ipoh.jpg", alt: "Ipoh's Mirror Lake", name: "Ipoh, Perak" },
  {
    image: "/images/langkawi.jpg",
    alt: "Islands and beach in Langkawi",
    name: "Langkawi, Kedah",
  },
  { image: "/images/kl.jpg", alt: "KL City Skyline", name: "Kuala Lumpur" },
  {
    image: "/images/penang.jpg",
    alt: "Street Art in George Town",
    name: "Penang",
  },
  {
    image: "/images/kuching.jpg",
    alt: "Kuching Waterfront",
    name: "Kuching, Sarawak",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  // current = number of slides showing, starting from 0
  // setCurrent = changes which slide is showing

  // go to next slide
  function nextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function prevSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  //   go to previous slide

  return (
    <div>
      <div className="banner">
        <img src={slides[current].image} alt={slides[current].alt} />
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
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
        {/* &#10094; and &#10095; creates the arrow symbol */}
        <p className="slide-caption">{slides[current].name}</p>
      </div>
    </div>
  );
}
export default Home;

import { useState } from "react";
import { Link } from "react-router-dom";
import HighlightCard from "../component/HighlightCard";
import FaqItem from "../component/Faqitem";

// list of highlights, each one is shown as a HighlightCard
const highlights = [
  {
    id: 1,
    icon: "/icons/affordable.svg",
    title: "Affordable Travel Packages",
    description: "Clear prices for every budget, with no hidden charges.",
  },
  {
    id: 2,
    icon: "/icons/guide.svg",
    title: "Experienced Tour Guides",
    description: "Friendly local guides who know the stories behind each place.",
  },
  {
    id: 3,
    icon: "/icons/destination.svg",
    title: "Local Destinations",
    description: "Islands, highlands and cities from Peninsular Malaysia to Borneo.",
  },
  {
    id: 4,
    icon: "/icons/comfort.svg",
    title: "Comfortable Arrangements",
    description: "Hand-picked stays and smooth transport so you can relax.",
  },
];

// new feature. list of frequently asked questions
const faqs = [
  {
    id: 1,
    question: "How do I book a package?",
    answer:
      "Online booking is not available yet. Send us a message on the Contact page with the package you like and we will get back to you.",
  },
  {
    id: 2,
    question: "Can I customise a package?",
    answer:
      "Yes. Tell us your dates, budget and interests through the Contact page and we can suggest changes to a package.",
  },
  {
    id: 3,
    question: "Do I need a visa to visit Malaysia?",
    answer:
      "It depends on your passport and how long you plan to stay. Please check the official Malaysian immigration website before you travel.",
  },
  {
    id: 4,
    question: "What is included in the price?",
    answer:
      "Each package card shows its duration and price. For details of what is included, contact us and we will explain it.",
  },
];

function About() {
  // openFaq = id of the question that is open, null means all are closed
  const [openFaq, setOpenFaq] = useState(null);

  // clicking an open question closes it, clicking another one opens that one
  function toggleFaq(id) {
    setOpenFaq(openFaq === id ? null : id);
  }

  return (
    <div className="container">
      <h2>About Explore Malaysia</h2>

      {/* short description of the agency */}
      <div className="about-intro">
        <img src="/images/cameron.jpg" alt="Tea plantation hills in Cameron Highlands" />
        <div className="about-text">
          <p>
            Explore Malaysia is a local travel agency that helps visitors discover
            the best of the country, from the street art of Penang to the peaks of
            Sabah.
          </p>
          <p>
            We plan simple, well-organised packages so you can spend less time
            planning and more time enjoying your holiday.
          </p>
        </div>
      </div>

      {/* highlights section */}
      <h2>Why Travel With Us</h2>
      <div className="highlight-list">
        {highlights.map((item) => (
          <HighlightCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* new feature. FAQ section */}
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openFaq === item.id}
            onToggle={() => toggleFaq(item.id)}
          />
        ))}
      </div>

      <Link to="/packages" className="view-all">See Our Packages</Link>
    </div>
  );
}
export default About;

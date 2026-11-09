const highlights = [
  {
    title: "Affordable travel packages",
    text: "Trips planned to suit different budgets without cutting out the experience.",
  },
  {
    title: "Experienced tour guides",
    text: "Friendly local guides who know the history, food and hidden spots.",
  },
  {
    title: "Local destinations",
    text: "From city streets to islands, highlands and rainforests across Malaysia.",
  },
  {
    title: "Comfortable travel arrangements",
    text: "Reliable transport and stays so you can relax and enjoy the trip.",
  },
];

function About() {
  return (
    <section className="container">
      
      <h2>About Explore Malaysia</h2>
      
      <p className="about-intro"> Explore Malaysia helps you discover the best of the country, from busy cities and heritage towns to beaches and rainforests. We keep travel simple, affordable and enjoyable for everyone. </p>

      <div className="about-list">
        {highlights.map((item) => (
      
          <div className="about-card" key={item.title}>
            
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            
          </div>
      
        ))}
      </div>
    </section>
  );
}

export default About;

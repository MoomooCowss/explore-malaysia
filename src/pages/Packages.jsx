import { useState, useEffect } from "react";

function Packages() {
  // packages = stores the package data from JSON file
  // setPackages = update the package data
  const [packages, setPackages] = useState([]);

  // fetches the data
  useEffect(() => {
    fetch("/packages.json")
      .then((response) => response.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="container">
      <h2>Our Travel Packages</h2>

      {packages.map((pkg) => (
        <div key={pkg.id}>
          <h3>{pkg.destination}</h3>
          <p>Category: {pkg.category}</p>
          <p>Duration: {pkg.duration}</p>
          <p>Price: RM {pkg.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Packages;

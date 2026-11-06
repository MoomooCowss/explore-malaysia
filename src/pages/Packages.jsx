import { useState, useEffect } from "react";
import PackageCard from "../component/PackageCard";

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

        <div className="package-list">
            {packages.map((pkg) => (
                <PackageCard
                key={pkg.id}
                image={pkg.image}
                destination={pkg.destination}
                state={pkg.state}
                category={pkg.category}
                description={pkg.description}
                duration={pkg.duration}
                price={pkg.price}
                />
            ))}
        </div>

    </div>
  );
}
export default Packages;

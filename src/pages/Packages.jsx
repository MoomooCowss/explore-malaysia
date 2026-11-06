import { useState, useEffect } from "react";
import PackageCard from "../component/PackageCard";

function Packages() {
  // packages = stores the package data from JSON file
  // setPackages = update the package data
  const [packages, setPackages] = useState([]);

  //   for loading and error checking
  //   loading =  true while waiting for data
  const [loading, setLoading] = useState(true);
  // error = storing an error message if fetch fails
  const [error, setError] = useState("");

  // fetches the data
  useEffect(() => {
    fetch("/packages.json")
      .then((response) => {
        // loading check, if file not found, stops
        if (!response.ok) {
          throw new Error("Could not load package details.");
        }
        return response.json();
      })

      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      // error message
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>Our Travel Packages</h2>

      {/* error messsages to display if any */}
      {/* loading message */}
      {loading ? <p className="message">Loading packages~</p> : null}

      {/* error message if fetch fails */}
      {error ? (
        <div className="error">
            <p>Error:  {error}</p>
          <p>Sorry, something went wrong.</p>
        </div>
      ) : null}

      {/* error message if loads okay but no packages in json file */}
      {!loading && !error && packages.length === 0 ? (
        <p className="message">No packages are currently available now.</p>
      ) : null}

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

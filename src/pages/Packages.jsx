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

  // extra features -- search, category and sort by
  // search = text in search box
  const [search, setSearch] = useState("");
  // category = category in dropdown
  const [category, setCategory] = useState("All");
  // sort = sorting order from chosen dropdown
  const [sort, setSort] = useState("none");

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

    // to disply matches of category and search
    let shownPackages = packages.filter(
      (pkg) =>
        (pkg.destination.toLowerCase().includes(search.toLowerCase()) ||
          pkg.state.toLowerCase().includes(search.toLowerCase())) &&
        (category === "All" || pkg.category === category),
    );

    // sort the filtered list by price
    if (sort === "low") {
      shownPackages = shownPackages.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      shownPackages = shownPackages.sort((a, b) => b.price - a.price);
    }

  return (
    <div className="container">
      <h2>Our Travel Packages</h2>

      {/* search filter and sort controls */}
        <div className="package-filter">
            <input type="text" placeholder="Search destination or state" value={search} onChange={(e) => setSearch(e.target.value)} />
        

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Island">Island</option>
            <option value="Culture">Culture</option>
            <option value="City">City</option>
            <option value="Nature">Nature</option>
            <option value="Highlands">Highlands</option>
            <option value="Adventure">Adventure</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Sort by price</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
        </select>
        </div>

      {/* error messsages to display if any */}
      {/* loading message */}
      {loading ? <p className="message">Loading packages~</p> : null}

      {/* error message if fetch fails */}
      {error ? (
        <div className="error">
          <p>Error: {error}</p>
          <p>Sorry, something went wrong.</p>
        </div>
      ) : null}

      {/* no packages in the JSON file at all */}
      {!loading && !error && packages.length === 0 ? (
        <p className="message">No packages are currently available now.</p>
      ) : null}

      {/* packages exist, but none match the search or filter */}
      {!loading && !error && packages.length > 0 && shownPackages.length === 0 ? (
        <p className="message">No packages match your search. Try another destination or category.</p>
      ) : null}


      <div className="package-list">
        {shownPackages.map((pkg) => (
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

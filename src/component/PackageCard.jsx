// one card showing single travel package
// receives package details from Packages.jsx as props

function PackageCard(props){
    return (
        <div className="package-card">
            <img src={props.image} alt={props.destination} />
            <div className="package-info">
                <p className="package-category">Category: {props.category}</p>
                <h3>{props.destination}, {props.state}</h3>
                <p>{props.description}</p>
                <p>Duration: {props.duration}</p>
                <p className="package-price">RM {props.price}</p>
            </div>
        </div>
    );
}
export default PackageCard;
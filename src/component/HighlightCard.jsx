// one highlight box on the About page
// receives its icon, title and text from About.jsx as props

function HighlightCard(props) {
  return (
    <div className="highlight-card">
      <img className="highlight-icon" src={props.icon} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default HighlightCard;
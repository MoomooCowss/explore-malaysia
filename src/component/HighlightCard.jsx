// one highlight box on the About page
// receives its icon, title and text from About.jsx as props

function HighlightCard(props) {
  return (
    <div className="highlight-card">
      <span className="highlight-icon" aria-hidden="true">{props.icon}</span>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default HighlightCard;
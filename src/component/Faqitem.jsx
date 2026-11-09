// one question in the FAQ list on the About page
// receives the question, answer, whether it is open, and a toggle function as props

function FaqItem(props) {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={props.onToggle}
        aria-expanded={props.isOpen}
      >
        {props.question}
        <span className="faq-arrow">{props.isOpen ? "−" : "+"}</span>
      </button>
      {props.isOpen ? <p className="faq-answer">{props.answer}</p> : null}
    </div>
  );
}
export default FaqItem;
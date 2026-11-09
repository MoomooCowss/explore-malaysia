import { useState } from "react";

function Contact() {
  // stores what the user types in each field
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // stores the error message for each field
  const [errors, setErrors] = useState({});
  // true after a successful submit
  const [submitted, setSubmitted] = useState(false);

  // updates the field being typed in and clears its error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSubmitted(false);
  };

  // checks that no field is empty
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    // no errors means the form is valid
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="container">
      <h2>Contact / Feedback</h2>
      <p>We'd love to hear from you. Send us a message or share your feedback.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">Message / Feedback</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="submit-button">
          Send message
        </button>

        {submitted && (
          <p className="success">Thank you! Your message has been sent.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;

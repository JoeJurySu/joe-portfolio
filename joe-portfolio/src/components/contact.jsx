import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with user input
    const mailtoLink = `https://mail.google.com/mail/?view=cm&to=sumayang.joejurymit2011@gmail.com&su=Inquiry%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}`;

    // Open Gmail in a new tab
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: sumayang.joejurymit2011@gmail.com</p>
      <p>Feel free to contact me with any inquiries or questions!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

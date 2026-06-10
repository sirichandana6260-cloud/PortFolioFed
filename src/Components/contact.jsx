function Contact() {

  const downloadPortfolio = () => {
    window.print(); 
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>Email: yourmail@gmail.com</p>
      <p>Phone: +91 98765 43210</p>

      <button className="btn" onClick={downloadPortfolio}>
        Download Portfolio
      </button>
    </section>
  );
}

export default Contact;
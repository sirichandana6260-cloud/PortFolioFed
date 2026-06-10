function Contact() {

  const downloadPortfolio = () => {
    window.print(); // simple download as PDF
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>Email: yourmail@gmail.com</p>
      <p>Phone: +91 XXXXX XXXXX</p>

      <button className="btn" onClick={downloadPortfolio}>
        Download Portfolio
      </button>
    </section>
  );
}

export default Contact;
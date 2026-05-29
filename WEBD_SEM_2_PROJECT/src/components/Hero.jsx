function Hero() {

  const scrollToChat = () => {

    document
      .getElementById("chat")
      .scrollIntoView({
        behavior: "smooth"
      });

  };

  return (

    <section className="hero">

      <h2>
        AI that Empowers the Future
      </h2>

      <p>
        Build smarter applications using modern AI technologies with React and JavaScript.
      </p>

      <button
        className="btn"
        onClick={scrollToChat}
      >
        Get Started
      </button>

    </section>

  );
}

export default Hero;

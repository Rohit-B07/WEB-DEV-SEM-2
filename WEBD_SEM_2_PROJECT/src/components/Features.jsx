function Features() {

  const features = [
    {
      title: "GPT Technology",
      desc: "Advanced AI language understanding for modern applications."
    },
    {
      title: "Secure AI",
      desc: "Built with safety, alignment, and reliability."
    },
    {
      title: "Developer APIs",
      desc: "Easy integration with React and JavaScript projects."
    }
  ];

  return (
    <section id="features">

      <h2>Features</h2>

      <div className="features-grid">

        {features.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;
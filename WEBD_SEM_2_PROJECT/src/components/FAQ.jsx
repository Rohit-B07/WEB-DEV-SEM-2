import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [

    {
      question: "What is OpenAI?",
      answer:
        "OpenAI develops advanced AI systems and tools to help people solve problems and build applications."
    },

    {
      question: "Is this project responsive?",
      answer:
        "Yes, this React project is fully responsive and works across desktop, tablet, and mobile devices."
    },

    {
      question: "Which technologies are used?",
      answer:
        "This project uses React, JavaScript, CSS, Axios, and OpenRouter AI APIs."
    }

  ];

  const toggleFAQ = (index) => {

    if (openIndex === index) {

      setOpenIndex(null);

    } else {

      setOpenIndex(index);

    }

  };

  return (

    <section id="faq" className="faq-section">

      <h2>FAQ</h2>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="faq-item"
          >

            <div

              className="faq-question"

              onClick={() =>
                toggleFAQ(index)
              }

              style={{
                cursor: "pointer"
              }}
            >

              <h3>{faq.question}</h3>

              <span className="faq-icon">

                {openIndex === index ? "−" : "+"}

              </span>

            </div>

            {openIndex === index && (

              <p className="faq-answer">

                {faq.answer}

              </p>

            )}

          </div>

        ))}

      </div>

    </section>

  );

}

export default FAQ;
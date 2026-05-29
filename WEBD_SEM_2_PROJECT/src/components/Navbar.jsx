function Navbar({ darkMode, setDarkMode }) {

  return (

    <header className="navbar">

      <h1

        style={{ cursor: "pointer" }}

        onClick={() =>

          window.scrollTo({

            top: 0,

            behavior: "smooth"

          })

        }

      >

        OpenAI

      </h1>

      <nav>

        <a href="#features">Features</a>

        <a href="#chat">Chat</a>

        <a href="#faq">FAQ</a>

      </nav>

      <button

        className="btn"

        onClick={() =>
          setDarkMode(!darkMode)
        }

      >

        {darkMode ? "Light" : "Dark"}

      </button>

    </header>

  );

}

export default Navbar;
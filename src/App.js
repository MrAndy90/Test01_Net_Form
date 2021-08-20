import "./App.css";

function App() {
  const formstyles = {
    display: "flex",
    flexDirection: "column",
    margin: "40px",
  };

  return (
    <div className="App">
      <form
        style={formstyles}
        name="contact-form"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input required type="text" name="name" placeholder="Your name" />
        <input required type="email" name="email" placeholder="Your email" />
        <textarea
          required
          name="message"
          placeholder="message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Send a message</button>
      </form>
    </div>
  );
}

export default App;

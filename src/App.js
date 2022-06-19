import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (
    <div className="App">
      <Header />
      <div className="contact-list">
        {contacts.map((item, index) => {
          return (
            <Contact
              key={index}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

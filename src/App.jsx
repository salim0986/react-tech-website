import Home from "./Home/Home.jsx";
import "./App.css";
import NavBar from "./Navbar/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

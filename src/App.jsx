import Company from "./components/company/Company";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import GetStarted from "./components/getStarted/GetStarted";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import Residency from "./components/residency/Residency";
import Value from "./components/value/Value";
import "./index.scss";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company />
      <Residency />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;

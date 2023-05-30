import "./Hero.scss";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__container">
        <div className="hero-left">
          <div className="hero-left__title">
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <p>
            Find a variety of property that suit you very easily <br />
            Forget all difficulties in finding a residence for you
          </p>
          <div className="search-bar">
            <HiLocationMarker className="location" size={25} />
            <input type="text" placeholder="Enter Location" />
            <button className="btn">Search</button>
          </div>
          <div className="stats">
            <div className="stats__item">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
            <div className="stats__item">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Cutomers</span>
            </div>
            <div className="stats__item">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right__img">
            <img src="./assets/hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

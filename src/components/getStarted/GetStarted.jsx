import "./GetStarted.scss";

const GetStarted = () => {
  return (
    <section className="getStarted">
      <div className="wrapper getStarted__container">
        <div className="getStarted__info">
          <span className="primary">Get Started with Homyz</span>
          <span className="secondary">
            Find super attractive quotes from us. <br />
            Find your residence soon
          </span>
          <button className="btn">
            <a href="mailto:sk.saeed008@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

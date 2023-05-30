import "./Company.scss";

const Company = () => {
  return (
    <section className="company">
      <div className="wrapper company__container">
        <div className="company__container__img">
          <img src="./assets/prologis.png" alt="" />
        </div>
        <div className="company__container__img">
          <img src="./assets/tower.png" alt="" />
        </div>
        <div className="company__container__img">
          <img src="./assets/equinix.png" alt="" />
        </div>
        <div className="company__container__img">
          <img src="./assets/realty.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Company;

import "./Residency.scss";
import Data from "./Slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { slideSettings } from "./SliderSetting";

const Residency = () => {
  return (
    <section className="residency">
      <div className="wrapper residency__container">
        <div className="residency__title">
          <h2>Best Choices</h2>
          <h3>Popular Residencies</h3>
        </div>
        <Swiper {...slideSettings}>
          <SliderButtons />
          {Data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="residency__item">
                <div className="residency__item__img">
                  <img src={d.image} alt="home" />
                </div>
                <div className="residency__item__text">
                  <p>
                    <span style={{ color: "orange", "margin-right": "5px" }}>$</span>
                    {d.price}
                  </p>
                  <h4>{d.name}</h4>
                  <p>{d.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residency;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

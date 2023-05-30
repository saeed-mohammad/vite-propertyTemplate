import "./Contact.scss";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper contact__container">
        <div className="contact__left">
          <div className="info">
            <span className="orange">Our Contact Us</span>
            <span className="primary">Easy to Contact Us</span>
            <span className="secondary">
              We always help by providing best service for you. we belive a goodblace to
              live make your life better.
            </span>
            <div className="contact-card">
              {/*  */}
              <div className="contact-card__item">
                <div className="contact-card__item__icon">
                  <div className="icon">
                    <MdCall />
                  </div>
                  <div className="detail">
                    <span>Call</span>
                    <span>022 123 123 14</span>
                  </div>
                </div>
                <button className="btn">Call Now</button>
              </div>
              {/*  */}
              <div className="contact-card__item">
                <div className="contact-card__item__icon">
                  <div className="icon">
                    <BsFillChatDotsFill />
                  </div>
                  <div className="detail">
                    <span>Chat</span>
                    <span>022 123 123 14</span>
                  </div>
                </div>
                <button className="btn">Chat Now</button>
              </div>
              {/*  */}
              <div className="contact-card__item">
                <div className="contact-card__item__icon">
                  <div className="icon">
                    <BsFillChatDotsFill />
                  </div>
                  <div className="detail">
                    <span>Video Call</span>
                    <span>022 123 123 14</span>
                  </div>
                </div>
                <button className="btn">Chat Now</button>
              </div>
              {/*  */}
              <div className="contact-card__item">
                <div className="contact-card__item__icon">
                  <div className="icon">
                    <HiChatBubbleBottomCenter />
                  </div>
                  <div className="detail">
                    <span>Message</span>
                    <span>022 123 123 14</span>
                  </div>
                </div>
                <button className="btn">Message Now</button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="contact__right">
          <div className="contact__right__img">
            <img src="./assets/value.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

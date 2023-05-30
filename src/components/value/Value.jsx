import "./Value.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Data from "./accordin";
import { useState } from "react";
const Value = () => {
  return (
    <section className="value">
      <div className="wrapper value__container">
        <div className="value__left">
          <div className="value__left__img">
            <img src="./assets/value.png" alt="" />
          </div>
        </div>
        <div className="value__right">
          <span className="orange">Our Value</span>
          <span className="primary">Value We Give to You</span>
          <span className="secondary">
            We always ready to help by providing the best solution for you.
            <br />
            we belive a good balance to live can make your life better
          </span>

          {/* accordion */}
          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {Data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? setClassName("expanded") : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="Accordionheading">
                        {item.icon}
                        <span className="primary text">{item.heading}</span>
                        <div className="icon">
                          <MdOutlineArrowDropDown size={25} />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondary">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

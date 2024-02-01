import React from "react";
import bootOne from "../../images/boot-1.svg";
import bootTwo from "../../images/boot-2.svg";
import bootThree from "../../images/boot-3.svg";

const SecondSection = () => {
  return (
    <section className="secondSection">
      <article className="secondSection__one">
        <p>CHOOSE COLOR :</p>
        <div>
          <img src={bootOne} alt="" />
          <img src={bootTwo} alt="" />
          <img src={bootThree} alt="" />
        </div>
      </article>
      <article className="secondSection__two">
        <button>ADD TO CART</button>
        <button>BUY NOW</button>
      </article>
      <article className="secondSection__three">
        <p>INSPIRATION</p>
        <p>
          Inspired by the design of the latest Air Jordan game shoe, the Jordan
          Jumpman 2021 helps up-and-coming players level up their game.
        </p>
      </article>
    </section>
  );
};

export default SecondSection;

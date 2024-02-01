import React from "react";
import bootOne from "../../images/boot1.png";
import bootTwo from "../../images/boot2.png";
import bootThree from "../../images/boot3.png";

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

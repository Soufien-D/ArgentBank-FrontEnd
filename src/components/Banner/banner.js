import React from "react";
import background from "../../assets/bank-tree.webp";
import "../Banner/banner.scss";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background})` }}>
      <section className="banner__content">
        {/* <h2 className="sr-only">Promoted Content</h2> */}
        <p className="banner__content_subtitle">No fees.</p>
        <p className="banner__content_subtitle">No minimum deposit.</p>
        <p className="banner__content_subtitle">High interest rates.</p>
        <p className="banner__content_text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Banner;

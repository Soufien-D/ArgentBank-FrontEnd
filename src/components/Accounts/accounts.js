import React from "react";
import "../Accounts/accounts.scss";

function Accounts({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account__content_wrapper">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__amount_description">{description}</p>
      </div>
      <div>
        <button className="transaction__button">View transactions</button>
      </div>
    </section>
  );
}

export default Accounts;

import React from "react";
import "../Form/form.scss";

function Form() {
  return (
    <section className="login__content">
      <i className="fa-solid fa-circle-user"></i>
      <h2>Sign In</h2>
      <form>
        <div className="input__wrapper">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div className="input__wrapper">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div className="input__remember">
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="login__button">Sign In</button>
      </form>
    </section>
  );
}

export default Form;

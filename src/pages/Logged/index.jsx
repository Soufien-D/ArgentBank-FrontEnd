import React from "react";
import User from "../../components/User/user.js";
import Accounts from "../../components/Accounts/accounts.js";
import "../Logged/logged.scss";

function UserLogged() {
  return (
    <main className="background">
      <User firstname="Tony" lastname="Jarvis" />
      <Accounts
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Accounts
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Accounts
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default UserLogged;

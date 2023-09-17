import React, { useState } from "react";
import "./entry.style.css";
import LoginForm from "../../components/login/Login.comp";
import PasswordReset from "../../components/password-reset/PasswordReset.comp";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill up the form.");
    }

    // TODO: Call api to submit the form
    console.log(email, password);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please submit your email");
    }

    console.log("Test email for reset", email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <>
      <div className="entry-page bg-info ">
        <div className="bg-light h-50 w-50 rounded d-flex align-items-center justify-content-center">
          {formLoad === "login" && (
            <LoginForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              password={password}
            />
          )}

          {formLoad === "reset" && (
            <PasswordReset
              handleOnChange={handleOnChange}
              handleResetPassword={handleResetPassword}
              formSwitcher={formSwitcher}
              email={email}
              password={password}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Entry;

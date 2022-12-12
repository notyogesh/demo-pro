import React, { useState } from "react";
import { Form, Goo, Btn, Page, Round } from "./SignUpForm.style";
import google from "../../images/image 4.svg";
// import lock from "../../images/lock.svg";
import eye from "../../images/eye.svg";

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState(true);
  return (
    <Form>
      <Page>
        <Round>1</Round>
        <hr />
        <Round>2</Round>
        <hr />
        <Round>3</Round>
      </Page>
      <h2>Get Started with Cuporger</h2>
      <p className="par">
        Start your 14 days free trial. No credit card required
      </p>
      <Goo>
        <img src={google} alt="google" />
        <p>Sign Up with Google</p>
      </Goo>
      <h5>
        <span>Or Sign Up Email</span>
      </h5>
      <label for="email">Email address</label>
      <input
        placeholder="&#9993;    yourmail@cuporger.com "
        id="email"
        type="email"
      />
      <div className="pwdinput">
        <label for="password">Password</label>
        <input
          placeholder="&#128274;    ********"
          id="password"
          type={passwordType ? "password" : "text"}
        />
        <img
          src={eye}
          alt="eye"
          onClick={() => setPasswordType((prev) => !prev)}
        />
      </div>
      <Btn>Next</Btn>
      <p className="par">Already have an account? Login</p>
    </Form>
  );
};
export default SignUpForm;

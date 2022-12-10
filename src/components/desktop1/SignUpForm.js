import React from "react";
import { Form, Goo, Btn, Page, Round } from "./SignUpForm.style";
import google from "../../images/image 4.svg";
// import lock from "../../images/lock.svg";

const SignUpForm = () => {
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
        placeholder="&#9993;    yourmail@cuporger.com"
        id="email"
        type="email"
      />
      <label for="password">Password</label>
      <input
        placeholder="&#128274;    ********"
        id="password"
        type="password"
      />
      <Btn>Next</Btn>
      <p className="par">Already have an account? Login</p>
    </Form>
  );
};
export default SignUpForm;

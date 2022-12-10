import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Wrapper, FormDiv } from "./Desktop1.style";
import SignUpForm from "./SignUpForm";

export const Desktop1 = () => {
  const [primary, setPrimary] = useState(true);
  return (
    <Wrapper primary={primary}>
      <NavBar />
      <FormDiv>
        <SignUpForm />
      </FormDiv>
    </Wrapper>
  );
};
export default Desktop1;

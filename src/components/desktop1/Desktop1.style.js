import styled from "styled-components";
import background from "../../images/backg.svg";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.primary ? "#ffffff " : "#15233D")};
  width: 1440px;
  width: 100%;
  height: 1024px;
  background-image: url(${background});
  margin: 0;
  padding: 0;
`;
export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  margin-top: 3rem;
`;

import styled from "styled-components";
export const Form = styled.form`
  box-shadow: 4px 24px 60px 0px rgba(21, 35, 61, 0.15);
  display: flex;
  flex-direction: column;
  padding: 54px 36px;
  background: #ffffff;
  border-radius: 20px;
  // margin: 58px auto 95px auto;
  // width: 520px;
  // height: 739px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;

  & input {
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    padding-left: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
    height: 50px;
    width: 449px;
  }
  & label {
    color: #666666;
    font-size: 14px;
    line-height: 16px;
    padding: 10px 0;
  }
  & h2 {
    font-size: 32px;
    line-height: 38px;
    color: #050505;
    margin-bottom: -0.7rem;
  }

  & h5 {
    width: 100%;
    text-align: center;
    border-bottom: 2px solid rgba(179, 187, 196, 1);
    line-height: 0.1em;
    margin: 10px 0 20px;
    & span {
      background: #fff;
      padding: 0 10px;
      color: rgba(179, 187, 196, 1);
    }
  }
  & p {
    &.par {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #b3bbc4;
    }
  }
`;
export const Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
`;

export const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;

  & hr {
    border: 2px solid #15233d;
    display: inline-block;
    width: 100px;
  }
`;
export const Round = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #15233d;
  background: #ffffff;
  font-size: 32px;
  line-height: 38px;
  display: inline-block;
  color: #15233d;
  &:hover {
    background: #15233d;
    color: #ffffff;
  }
`;

export const Goo = styled(Button)`
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  line-height: 19px;
  height: 50px;
  margin: 30px 0 10px 0;
  & img {
    width: 24px;
    height: 24px;
  }
  & p {
    font-size: 16px;
    color: #050505;
    padding-left: 6px;
    line-height: 19px;
  }
`;
export const Btn = styled(Button)`
  background: #15233d;
  color: #ffffff;
  padding: 0.9rem;
  margin-top: 36px;
  font-size: 16px;
  line-height: 19px;
  border-radius: 10px;
`;

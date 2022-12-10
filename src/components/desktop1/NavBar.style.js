import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #15233d;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  & ul {
    display: flex;
    flex-direction: space-between;
    align-items: center;
    text-decoration: none;
    & li {
      text-decoration: none;
      display: inline-block;
      padding: 3.5rem 2rem;
      white-space: nowrap;
      &:hover {
        color: #cabc9f;
      }
    }
  }
  & div {
    &.nav-items {
      display: flex;
      margin-left: 2.5rem;
      & img {
        height: 41px;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 2rem;
      }
    }
    &.nav-items2 {
      display: flex;
      margin-left: auto;
      margin-right: 3rem;
    }
  }
`;

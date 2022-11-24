import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Button = styled.button`
  color: red;
  background-color: lightblue;
  width: 10rem;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button>hs</Button>
    </div>
  );
}

export default App;

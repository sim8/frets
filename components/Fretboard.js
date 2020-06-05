import config from "../config/standardGuitar";
import styled from "styled-components";
import Fret from "./Fret";

const FretboardWrapper = styled.div`
  outline: 1px solid red;
  display: flex;
  height: 100px;
  width: 80vw;
`;

const Fretboard = () => {
  const frets = [];
  for (let i = 1; i <= config.frets; i++) {
    frets.push(<Fret index={i} key={`${i}`} />);
  }
  return <FretboardWrapper>{frets}</FretboardWrapper>;
};

export default Fretboard;

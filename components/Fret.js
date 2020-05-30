import styled from "styled-components";
import config from "../config/standardGuitar";

// width: ${props => props.index};

const FretWrapper = styled.div`
  display: inline-block;
  outline: 1px solid black;
  height: 200px;
  width: calc(100% / ${config.frets});
`;

const Fret = ({ index }) => {
  return <FretWrapper index={index}>nice</FretWrapper>;
};

export default Fret;

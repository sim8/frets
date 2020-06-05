import styled from "styled-components";
import config from "../config/standardGuitar";
// import Inlays from "./Inlays";

// width: ${props => props.index};

const FretWrapper = styled.div`
  display: inline-block;
  outline: 1px solid black;
  position: relative;
  /* height: 200px; */
  /* width: calc(100% / ${config.frets}); */
  flex-grow: ${(props) => config.frets - props.index};
  flex-basis: 3%;
  background-color: lightgray;
`;

const Fret = ({ index }) => {
  let InlayComponent;
  if (config.display.inlays[index]) {
    // InlayComponent = Inlays[config.display.inlays[index]];
  }
  return (
    <FretWrapper index={index}>
      {/* {InlayComponent && <InlayComponent />} */}
    </FretWrapper>
  );
};

export default Fret;

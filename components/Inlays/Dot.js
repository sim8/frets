import _InlayWrapper from "./_InlayWrapper";

import styled from "styled-components";

const _Dot = styled.div`
  position: relative;
  border-radius: 50%;
  width: 100%;
  height: auto;
  padding-top: 100%;
  background: green;
`;

const Dot = () => (
  <_InlayWrapper>
    cool
    <Dot />
  </_InlayWrapper>
);

export default Dot;

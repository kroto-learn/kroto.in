import styled from "styled-components";
import StarsBackground from "/public/stars.svg";

const Background: React.FC = () => {
  return (
    <>
      <Wrapper />
      <Stars />
    </>
  );
};

const Wrapper = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 1200px;
  background: linear-gradient(180deg, #21252c 0%, #282c34 100%);
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: repeat;
  background-image: url(${StarsBackground});
  height: 224px;
  top: 10px;
`;

export default Background;

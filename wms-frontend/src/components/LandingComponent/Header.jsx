import styled, { createGlobalStyle } from "styled-components";
import HeaderImage from "../../assets/images/header-img.jpg";
import Dots from "../../assets/svg/Dots";

const GlobalStyle = createGlobalStyle`
  body {
    background: #040024;
    color: #000000;
    font-family: 'Khula', sans-serif;
    overflow-x: hidden;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60 whiteColor">Sistem Informasi Gudang Mebel.</h1>
            <HeaderP className="font13 orangeColor semiBold">
              Selamat Datang DiSIGMEB SUMBEREJO.
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="orangeBg"></GreyDiv>
        </RightSide>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }

  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  font-size: 1.5rem;

  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
    font-size: 1.5rem;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;

  @media (max-width: 960px) {
    right: 100px;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

import  { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate darkBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              SIGMEB SUMBEREJO
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Beranda
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Tentang Kami
              </Link>
            </li>
          
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Galeri Kami
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Fitur Kami
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="kontak" spy={true} smooth={true} offset={-80}>
                Kontak Kami
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
          
            <li className="semiBold font15 pointer flexCenter">
              <a href="/login" className="radius8 orangeBg" style={{ padding: "10px 15px" }}>
                Log in
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;



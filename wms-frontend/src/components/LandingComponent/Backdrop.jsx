import PropTypes from "prop-types";
import styled from "styled-components";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper className="lightBg" onClick={() => toggleSidebar(false)}></Wrapper>;
}

Backdrop.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.5); /* Warna latar belakang semi transparan */
`;

import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectBox = ({ img, title, text, action }) => {
  return (
    <Wrapper>
      <ImgBtn className="animate pointer" onClick={action ? () => action() : null}>
        <Img src={img} alt={title} />
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

ProjectBox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  action: PropTypes.func
};

ProjectBox.defaultProps = {
  text: "",
  action: null
};

export default ProjectBox;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const projectImageSize = "500px";

const Img = styled.img`
  width: 100%;
  height: ${projectImageSize};
  object-fit: cover;
  border-radius: 8px;
`;

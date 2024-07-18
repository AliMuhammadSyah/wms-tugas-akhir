import styled from "styled-components";
import ProjectBox from "./ProjectBox";
import ProjectImg1 from "../../assets/images/projects/1.jpg";
import ProjectImg2 from "../../assets/images/projects/2.jpg";
import ProjectImg3 from "../../assets/images/projects/3.jpg";
import ProjectImg4 from "../../assets/images/projects/4.jpg";
import ProjectImg5 from "../../assets/images/projects/5.jpg";
import ProjectImg6 from "../../assets/images/projects/6.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <Container className="lightBg">
        <HeaderInfo className="container py-7">
          <h1 className="font40 extraBold text-center">Galeri Kami</h1>
          <MainTitle className="mb-4">Galeri Kami menampilkan gambar-gambar <span className="text-primary">produk unggulan kami.</span></MainTitle>
        </HeaderInfo>
        <ProjectsGrid className="container py-5">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                // title="Proyek Hebat 1"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                // title="Proyek Hebat 2"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                // title="Proyek Hebat 3"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                // title="Proyek Hebat 4"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                // title="Proyek Hebat 5"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                // title="Proyek Hebat 6"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
        </ProjectsGrid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 24px 0;
  background-color: #fFF;
`;

const Container = styled.div`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  .col-lg-4 {
    margin-bottom: 15px; /* Mengurangi margin untuk membuat gambar lebih rapat secara vertikal */
    padding-left: 7.5px; /* Menyesuaikan padding untuk jarak horizontal */
    padding-right: 7.5px; /* Menyesuaikan padding untuk jarak horizontal */
  }

  @media (max-width: 768px) {
    .col-sm-6 {
      padding-left: 5px; /* Menyesuaikan padding untuk layar yang lebih kecil */
      padding-right: 5px; /* Menyesuaikan padding untuk layar yang lebih kecil */
    }
  }
`;

const MainTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: #000;

  .text-primary {
    color: #13357B;
  }
`;

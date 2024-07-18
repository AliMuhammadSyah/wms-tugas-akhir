import styled from "styled-components";
import AboutImg1 from "../../assets/images/about-1.jpg"; // Misalnya, Anda menggunakan gambar untuk konten

export default function Services() {
  return (
    <Wrapper id="services">
      <Container className="container-fluid about py-5">
        <InnerContainer className="container py-5">
          <ContentWrapper className="row g-10 align-items-start">
            <ImageContainer className="col-lg-5">
              <StyledImageWrapper>
                <img src={AboutImg1} className="img-fluid" alt="Tentang Kami" />
              </StyledImageWrapper>
            </ImageContainer>
            <TextContainer className="col-lg-7">
              <SectionTitle className="section-about-title pe-3">Tentang Kami</SectionTitle>
              <MainTitle className="mb-4">
                Apa Itu Sistem Informasi<span className="text-primary"> Gudang Mebel Desa?</span>
              </MainTitle>
              <Paragraph className="mb-4">
                Sistem Informasi Gudang Mebel Desa adalah sebuah aplikasi berbasis web yang dirancang untuk mengelola data inventaris, memantau stok barang, mengatur distribusi, serta mengoptimalkan proses administrasi gudang. Sistem ini memungkinkan pengelolaan data secara real-time dan akurat, yang pada akhirnya meningkatkan efisiensi operasional dan meminimalkan kesalahan manusia.
              </Paragraph>
              <Paragraph className="mb-4">
                Sistem Informasi Gudang Mebel Desa merupakan solusi modern yang menawarkan berbagai manfaat untuk pengelolaan gudang mebel di desa. Dengan fitur-fitur unggulannya, sistem ini tidak hanya meningkatkan efisiensi dan akurasi, tetapi juga membantu dalam pengambilan keputusan yang lebih baik dan cepat. Implementasi sistem ini diharapkan dapat membawa industri mebel di desa-desa menuju era digital yang lebih maju dan kompetitif.
              </Paragraph>
            </TextContainer>
          </ContentWrapper>
 
        </InnerContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 0;
`;

const InnerContainer = styled.div`
  padding: 1.2rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 34.666667%;
  max-width: 34.666667%;

  @media (max-width: 860px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const StyledImageWrapper = styled.div`
  height: 100%;
  border: 50px solid transparent;
  border-color: transparent #040024 transparent #040024;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 860px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: left;
  }
`;

const SectionTitle = styled.h1`
  padding-right: 1rem;
  color: #000;
  font-weight: bold;
  font-size: 2.5rem;
`;

const MainTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: #000;

  .text-primary {
    color: #13357B;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
`;

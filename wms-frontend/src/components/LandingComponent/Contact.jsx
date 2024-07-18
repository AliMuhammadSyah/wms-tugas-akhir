import styled from "styled-components";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <Wrapper id="kontak">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Hubungi Kami</h1>
            <p className="font13">
              Anda dapat menghubungi kami melalui informasi kontak di bawah ini. Kami akan dengan senang hati
              <br />
              membantu Anda dengan segala pertanyaan atau kebutuhan yang Anda miliki.
            </p>
          </HeaderInfo>
          <ContactInfoWrapper>
            <ContactItem>
              <IconWrapper>
                <PhoneIcon style={{ fontSize: 40, color: '#7620ff' }} />
              </IconWrapper>
              <ContactText>
                <h3>Telepon</h3>
                <p>0813-3995-6143</p>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <EmailIcon style={{ fontSize: 40, color: '#7620ff' }} />
              </IconWrapper>
              <ContactText>
                <h3>Email</h3>
                <p>sigmebsumberejo@gmail.com</p>
              </ContactText>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <LocationOnIcon style={{ fontSize: 40, color: '#7620ff' }} />
              </IconWrapper>
              <ContactText>
                <h3>Alamat</h3>
                <p>Jl. Musi Desa.Sumberejo, Sukodono, Lumajang</p>
              </ContactText>
            </ContactItem>
          </ContactInfoWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  
   background-color: #fff;
`;

const HeaderInfo = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 13px;
    color: #707070;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactText = styled.div`
  h3 {
    margin: 0 0 5px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: #555;
  }
`;

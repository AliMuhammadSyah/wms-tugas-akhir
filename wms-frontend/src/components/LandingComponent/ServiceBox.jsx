import RollerIcon from '@mui/icons-material/Build';
import SearchIcon from '@mui/icons-material/Search'; 
import PrinterIcon from '@mui/icons-material/Print';
import MonitorIcon from '@mui/icons-material/Computer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  roller: <RollerIcon fontSize="large" />,
  search: <SearchIcon fontSize="large" />, 
  printer: <PrinterIcon fontSize="large" />,
  monitor: <MonitorIcon fontSize="large" />,
};

export default function ServiceBox({ icon, title, subtitle, borderColor }) {
  return (
    <StyledServiceBox borderColor={borderColor}>
      <IconWrapper>{icons[icon]}</IconWrapper>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </StyledServiceBox>
  );
}

ServiceBox.propTypes = {
  icon: PropTypes.oneOf(['roller', 'search', 'printer', 'monitor']).isRequired, // Memastikan properti icon yang diterima adalah salah satu dari roller, search, printer, atau monitor
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

const StyledServiceBox = styled.div`
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ borderColor }) => borderColor};
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-weight: bold;
`;

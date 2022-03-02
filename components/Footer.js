import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #324460;
  color: #fff;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 19.875rem;
  height: 9rem;

  margin: 0rem 0.625rem;

  background: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(35, 52, 77, 0.05);
  border-radius: 6px;

`;

const FooterHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;


  color: #23344D;

  // margin: 0.875rem 0rem;

`;

const FooterText = styled.p`

width: 15.25rem;
// height: 3.75rem;

font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
/* or 154% */

text-align: center;

color: #8997AB;

// margin: 0.875rem 0rem;


`;



const Footer = () => {
  return (
    <FooterSection>

      <FooterCard>
        <FooterHeading>Instant Payouts</FooterHeading>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</FooterText>
      </FooterCard>
      <FooterCard>
        <FooterHeading>Weekly Winners</FooterHeading>
          <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</FooterText>
        </FooterCard>
      <FooterCard>
        <FooterHeading>Multiple Pools</FooterHeading>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</FooterText>
      </FooterCard>
    </FooterSection>
  );
};

export default Footer;

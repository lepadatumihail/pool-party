import Head from 'next/head';
import styled from 'styled-components';

const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #23344D;
  height:93vh;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 33%;
`;

const FirstRowLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 9rem;
`;

const SecondRowLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 19em;
`;


const CenterSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -9em;
  width: 33%;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12em 0em;
  width: 33%;
`;

const FirstRowRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SecondRowRightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 6em;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SecondaryMessage = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #CA715E;
`;

const MainMessage = styled.h1`
  width: 32.625rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 338px;
`;

const ButtonOrange = styled.button`
  width: 10.375rem;
  height: 3rem;
  background: #E0644A;
  box-shadow: 0px 4px 40px rgba(127, 73, 183, 0.25);
  border: 1px solid #E0644A;
  border-radius: 36px;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
`;

const ButtonWhite = styled.button`
  width: 9rem;
  height: 3rem;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 21px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #23344D;
`;

const PersonCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 12.875rem;
  height: 4rem;
  background: #FFFFFF;
  box-shadow: 0px 8px 16px rgba(35, 52, 77, 0.1);
  border-radius: 28px;
  margin-right: 3rem;
`;

const CardThumbnail = styled.img`
  margin: 0rem 0.5rem;
`;

const NamePrizeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #23344D;
`;

const FooterText = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
color: #8997AB;
margin: 0rem 0rem;
`;

const FooterHeading = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #23344D;
  margin: 0rem 0rem;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>PoolParty</title>
      </Head>
        <MainRow>

          <LeftSide>
            <FirstRowLeftSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail4.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Jason Keller</FooterHeading>
                  <FooterText>
                   Won $10,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </FirstRowLeftSide>

            <SecondRowLeftSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail3.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Sarah Perkins</FooterHeading>
                  <FooterText>
                   Won $80,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </SecondRowLeftSide>
          </LeftSide>

          <CenterSide>
            <CenterContent>
              <SecondaryMessage>A DECENTRALIZED BINANCE LOTTERY GAME</SecondaryMessage>
              <MainMessage>Small pools, huge payouts. The Binance lottery making crypto holders wealthy.</MainMessage>
              <ButtonsRow>
                <ButtonOrange>Enter A Lottery</ButtonOrange>
                <ButtonWhite>Learn More</ButtonWhite>
              </ButtonsRow>
            </CenterContent>
          </CenterSide>

          <RightSide>
            <FirstRowRightSide style={{marginRight:'5em'}}>
              <PersonCard>
                <CardThumbnail src='/thumbnail1.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>Patricia Thompson</FooterHeading>
                  <FooterText>
                   Won $50,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </FirstRowRightSide>

            <SecondRowRightSide>
              <PersonCard>
                <CardThumbnail src='/thumbnail2.svg' alt='TN'></CardThumbnail>
                <NamePrizeText>
                  <FooterHeading>David Meddow</FooterHeading>
                  <FooterText>
                   Won $120,000 
                  </FooterText>
                </NamePrizeText>
              </PersonCard>
            </SecondRowRightSide>
          </RightSide>
          
        </MainRow>
    </>
  );
}


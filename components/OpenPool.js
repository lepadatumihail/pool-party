import styled from 'styled-components'

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const ProfileHeading = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #23344D;
  margin: 0rem 0rem;
`;
const OpenPoolText = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
text-transform: uppercase;
color: #8997AB;
margin: 0.5rem 0rem;
`;

const OpenPoolHeading = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #23344D;
  margin: 0rem 0rem;
`;

const ProgressBarImg = styled.img`
  margin-top: -10px;
  content:url(progressBar.svg);
`;

const ButtonOrange = styled.button`
  width: 3.563rem;
  height: 1.75rem;

  background: #E0644A;
  box-shadow: 0px 4px 40px rgba(127, 73, 183, 0.25);
  border: 1px solid #E0644A;
  border-radius: 36px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
`;

const OpenPool = () => {
    return(
        <FlexRow style={{justifyContent:'space-around',borderBottom:'1px solid #EBEFF9', padding:'2rem 0rem'}}>
        <FlexColumn >
          <ProfileHeading className='primaryText'>$10.000</ProfileHeading>
          <OpenPoolText>SHRIMP # 8399</OpenPoolText>
        </FlexColumn>

        <FlexColumn>
          <OpenPoolHeading>Open</OpenPoolHeading>
          <OpenPoolText>STATUS</OpenPoolText>
        </FlexColumn>

        <FlexColumn>
          <OpenPoolHeading>$10</OpenPoolHeading>
          <OpenPoolText>BUY IN</OpenPoolText>
        </FlexColumn>

        <FlexColumn>
          <OpenPoolHeading>533/1000</OpenPoolHeading>
          <OpenPoolText>PLAYERS</OpenPoolText>
        </FlexColumn>

        <FlexColumn>
          <OpenPoolHeading>12:01:12</OpenPoolHeading>
          <OpenPoolText>STARTS</OpenPoolText>
        </FlexColumn>

        <FlexColumn>
          <OpenPoolHeading>12:01:12</OpenPoolHeading>
          <OpenPoolText>EXPIRES</OpenPoolText>
        </FlexColumn>

        <FlexColumn >
          <OpenPoolHeading>12:01:12</OpenPoolHeading>
          <OpenPoolText>EXPIRES</OpenPoolText>
        </FlexColumn>

        <ProgressBarImg/>

        <FlexColumn>
          <ButtonOrange>Join</ButtonOrange>
        </FlexColumn>

      </FlexRow>
    )
}

export default OpenPool
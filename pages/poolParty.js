
import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components'
import OpenPool from '../components/OpenPool.js'

const ParentDiv = styled.div`
  padding:70px;
`;
const DivH = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 50px;
  background-color: #f1f4f8;
`;
const DivPlayer = styled.div`
  display: flex;
  flex-direction: row;

`;

const PoolPot = styled.div`
  background-color: #fafbfd;
  border: 1px solid #EEF2FB;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25rem;
  border-radius: 8px;
  margin: 0rem 0.5rem;
`;
const PoolPotEmpty = styled.div`
  background-color: #fafbfd;
  border: 1px solid #EEF2FB;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width: 25rem;
  border-radius: 8px;
  margin: 0rem 0.5rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const PoolsRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileImg = styled.img`
  content:url('icons/lionLogo.svg');
  width: 52px;
  margin: 0rem 0.75rem;
`;

const PoolImg = styled.img`
  content:url('icons/lionLogo.svg');
  width: 33px;
  margin: 0rem 0.5rem;
`;

const ThumbnailImg4 = styled.img`
  content:url('/thumbnail4.svg');
  width: 33px;
  margin: 0rem 0.5rem;
`;

const ThumbnailImg3 = styled.img`
  content:url('/thumbnail3.svg');
  width: 33px;
  margin: 0rem 0.5rem;
`;

const ThumbnailImg2 = styled.img`
  content:url('/thumbnail2.svg');
  width: 33px;
  margin: 0rem 0.5rem;
`;

const StarImg = styled.img`
  width: 23px;
  margin: 1em 0.5em 0 0.5em;
  content: url('icons/star.svg');
`

const InboxImg = styled.img`
  content:url('icons/inbox.svg');
`;

const WalletCheckImg = styled.img`
  content:url(GreenCheck.svg);
  margin-right:  0.3rem;
`;

const AddPoolImg = styled.img`
  content:url('AddPoolIcon.svg');
  width: 52px;
`;

const AddImg = styled.img`
  content:url('icons/add.svg');

`;

const NamePrizeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #23344D;
  align-self: center;
  text-align: center;
`;

const FooterText = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
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

const ProfileText = styled.p`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
color: #8C94B6;
margin: 0rem 0rem;
`;

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
color: #8997AB;
margin: 0.5rem 0rem;
`;

const OpenPoolHeading = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #23344D;
  margin: 0rem 0rem;
`;

const HeadingBorder = styled.h3`
  border-bottom: 1px solid #E0644A;
  margin: 2em 1em 1em 2em;
  padding-bottom: 0.3em;
  width: max-content;
  font-size: 20px;
  color: #23344D;
`
const StakedWinners = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
`


const JoinButton = styled.button`
  background-color: #CA715E;
  cursor: pointer;
  color: white;
  min-width: 7.875rem;
  height:2.5rem;
  border: 1px solid #CA715E;
  border-radius: 30px;
  &:active {
    background-color: #b82c0f;
    color: #d6d6d6;
  }
`;
const CancelButton = styled.button`
  min-width: 7.875rem;
  cursor: pointer;
  height:2.5rem;
  background: #FFFFFF;
  border: 1px solid #8C94B6;
  border-radius: 23px;
  &:active {
    color: #CA715E;
    box-shadow: 0 1px #666;
    transform: translateY(1px);
  };
`;

const FundsInput = styled.input`
  width: 62px;
  height: 35px;
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder{
    font-weight:700;
    font-size: 16px;
    color: #23344D;
  }
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    height: '340px',
    background: '#FFFFFF',
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
};

function PoolParty() {

  const [isOpen,setIsOpen] = useState(false)

  const ModalAdd = () => {
    return(
      <Modal 
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FlexColumn style={{alignItems:'center',gap:'2.5em'}}>
          <h3 style={{color:'#4F4F4F'}}>Pool 1 Details</h3>
          
          <FlexRow style={{gap:'1em'}}>
            <AddImg/>
            <FundsInput placeholder='10' type='number'/>
          </FlexRow>
         
          <FlexRow style={{gap: '2em'}}>
            <OpenPoolHeading style={{color:'#4F4F4F'}}>Total to be staked: 100</OpenPoolHeading>
            <OpenPoolHeading style={{color:'#4F4F4F'}}>Available Funds: 100$</OpenPoolHeading>
          </FlexRow>
          <FlexRow style={{gap:'3em'}}>
            <JoinButton> Join Pool</JoinButton>
            <CancelButton onClick={()=>setIsOpen(false)}>Cancel</CancelButton>
          </FlexRow>
          </FlexColumn>
      </Modal>
    )
  }


  return (
    <div>
      <ModalAdd/>
    
      <DivH>
      <DivPlayer>
        <ProfileImg/>
        <NamePrizeText style={{border:'none',gap:'0'}}>
          <ProfileHeading>Player 73288</ProfileHeading>
            <FlexRow style={{marginTop: '0.5rem'}}>
              <WalletCheckImg/>
              <ProfileText>
                Wallet Connected 
              </ProfileText>
            </FlexRow>
        </NamePrizeText>

      </DivPlayer>
      <div style={{display:'flex', gap:'4rem'}}>
        <NamePrizeText style={{ borderRight: '1px solid #d5dcec',paddingRight:'5em'}} >
          <OpenPoolHeading>525/1000</OpenPoolHeading>
          <OpenPoolText>Karma points</OpenPoolText>
        </NamePrizeText>
      
        <NamePrizeText style={{ borderRight: '1px solid #d5dcec',paddingRight:'5em'}}  >
          <OpenPoolHeading>$500.00</OpenPoolHeading>
          <OpenPoolText>Currently staked</OpenPoolText>
        </NamePrizeText>

        <NamePrizeText style={{ borderRight: '1px solid #d5dcec',paddingRight:'5em'}} >
          <OpenPoolHeading>002</OpenPoolHeading>
          <OpenPoolText>Total Wins</OpenPoolText>
        </NamePrizeText>

        <NamePrizeText >
          <OpenPoolHeading>$750.50</OpenPoolHeading>
          <OpenPoolText>Current Balance</OpenPoolText>
        </NamePrizeText>
      </div>
    </DivH>
  <ParentDiv>
   

        <div style={{marginTop:'0px',display:'flex', flexDirection:'row', marginLeft:'10px'}}>
          <InboxImg/>
          <h3 className='primaryText' style={{fontSize:'1.17em',marginLeft:'10px'}}>My Pools</h3>
        </div>

        <PoolsRow>
          <PoolPot>
            <div style={{margin:'30px 0px'}}>
              <h3 className='primaryText'>$10,000</h3>
              <p className='secondaryText'>WINNING POT</p>
            </div>
        
          <DivPlayer style={{justifyContent:'space-evenly'}}>
          <div style={{fontSize:'12px'}}>
              <h3 className='primaryText'>Filling...</h3>
              <p className='secondaryText'>STATUS</p>
            </div>

            <div style={{fontSize:'12px'}}>
              <h3  className='primaryText'>$10</h3>
              <p className='secondaryText'>STAKE</p>
            </div>

            <div style={{fontSize:'12px'}}>
              <h3  className='primaryText'>533/1000</h3>
              <p className='secondaryText'>PLAYERS</p>
            </div>

            <div style={{fontSize:'12px'}}>
              <h3 style={{color:'#CA715E'}}>12:01:12</h3>
              <p className='secondaryText'>EXPIRES</p>
            </div>
          </DivPlayer>
          </PoolPot>

          <PoolPotEmpty >
            <button 
            onClick={()=>setIsOpen(true)}
            style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}}> 
              <AddPoolImg/>
            </button>
          </PoolPotEmpty>

          <PoolPotEmpty >
          <button 
            onClick={()=>setIsOpen(true)}
            style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}}> 
              <AddPoolImg/>
            </button>
          </PoolPotEmpty>

          <PoolPotEmpty >
          <button 
            onClick={()=>setIsOpen(true)}
            style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}}> 
              <AddPoolImg/>
            </button>
          </PoolPotEmpty>

          <PoolPotEmpty >
          <button 
            onClick={()=>setIsOpen(true)}
            style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}}> 
              <AddPoolImg/>
            </button>
          </PoolPotEmpty>
        </PoolsRow>

        <FlexRow style={{justifyContent:'space-between',marginTop:'60px'}}>
        <FlexColumn style={{flex:3}}>
        <FlexRow>
          <HeadingBorder>Open Pools</HeadingBorder>
          <HeadingBorder style={{border:'none'}}>Closed Pools</HeadingBorder>
        </FlexRow>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
            <OpenPool/>
          </FlexColumn>

        <FlexColumn style={{flex:1,paddingLeft:'35px',gap:'2em'}}>
          <FlexRow>
            <StarImg/>
            <HeadingBorder style={{margin:'2em 0em 1em 0em',border:'none'}}>Highest Staked Winners</HeadingBorder>
          </FlexRow>

          <StakedWinners>
            <DivPlayer>
              <ThumbnailImg2/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

          <StakedWinners>
            <DivPlayer>
              <PoolImg/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

          <StakedWinners>
            <DivPlayer>
              <ThumbnailImg2/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

          <StakedWinners>
            <DivPlayer>
              <ThumbnailImg3/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

          <StakedWinners>
            <DivPlayer>
              <ThumbnailImg4/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

          <StakedWinners>
            <DivPlayer>
              <ThumbnailImg3/>
              <FlexColumn style={{gap:'0.4em'}}>
                <FooterHeading>David Meddow</FooterHeading>
                <FooterText>Wallet Connected </FooterText>
              </FlexColumn>
            </DivPlayer>
            <FlexColumn style={{gap:'0.4em',alignItems: 'flex-end'}}>
              <FooterHeading>$10,000</FooterHeading>
              <FooterText>WON</FooterText>
            </FlexColumn>
          </StakedWinners>

        </FlexColumn>
        </FlexRow>
  </ParentDiv>
  </div>
  );
}

export default PoolParty;

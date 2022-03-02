import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 5rem;
  background: #23344D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLogo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30%;
`;

const Pool = styled.h1`
  font-family: 'Roboto', sans-serif;  
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
`;

const Party = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

const LogoSvg = styled.img`
  margin: 0px 8px;
`;

const JoinButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #CA715E;
  min-width: 5.875rem;
  height:2.063rem;
  margin-right:3rem;
  border: 1px solid #CA715E;
  box-sizing: border-box;
  border-radius: 30px;
  &:hover,
  &:focus {
    background-color: #CA715E;
    color: #3d3d3d;
  }
  &:active {
    background-color: #b82c0f;
    color: #d6d6d6;
  }
`;
const ConnectWalletButton = styled.button`
  background-color: #E0644A;
  color: white;
  border: 0px;
  cursor: pointer;
  min-width: 7.875rem;
  height:2.063rem;
  margin-right:3rem;
  border-radius: 30px;
  &:active {
    background-color: #b82c0f;
    color: #d6d6d6;
    box-shadow: 0 1px #666;
    transform: translateY(1px);
  };
`;


const Navbar = ({display}) => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLogo>
            <LogoSvg src='/logo.svg' alt='PP'></LogoSvg>
            <Pool>Pool</Pool>
            <Party>Party</Party>
          </StyledLogo>
        </Link>
      </div>
      <div style={{display:display ? 'inline-flex' : 'none',gap:'4rem', fontSize:'13px'}}>
        <Link href='/poolParty' passHref>
          <p>My pools</p>
        </Link>
        <Link href='/poolParty' passHref>
          <p>How to play</p>
        </Link>
        <Link href='/poolParty' passHref>
          <p>Project Roadmap</p>
        </Link>
        <Link href='/poolParty' passHref>
          <p>Smart Contract</p>
        </Link>
      </div>
      <div>
        { !display ? 
          <Link href='/poolParty' passHref>
            <JoinButton>Join Now</JoinButton>
          </Link>
        : 
          <Link href='/poolParty' passHref>
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
         </Link>
        }
       
      </div>
    </Nav>
  );
};

export default Navbar;

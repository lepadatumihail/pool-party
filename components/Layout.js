import React, {useEffect,useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [display,setDisplay] = useState(false)
  useEffect(()=>{
    setDisplay(children.type.name == 'PoolParty' ? true : false)
  },[children])
  return (
    <div>
      <Navbar display={display} />
      {children}
      <Footer />
    </div>
  );
}

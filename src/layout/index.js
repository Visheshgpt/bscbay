import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Layout(props) {
  console.log('use props = ', props); 
  console.log('use props = ', props.walletapproved);  
  return (
    <>
      <Header walletapprove={props.walletapprove} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
 
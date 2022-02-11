import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Layout(props) {
  console.log('use props = ', props);
  return (
    <>
      <Header walletapprove={props.walletapprove} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

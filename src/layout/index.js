import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header walletapprove={props.walletapprove} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

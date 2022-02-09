import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    document.getElementById('scrolly-main').classList.remove('vh-100');
    setTimeout(()=>{
      window.scrollTo(0, 0);
      document.getElementById('scrolly-main').classList.add('vh-100');
    }, 200);
  }, []);
  return null;
}

export default withRouter(ScrollToTop);

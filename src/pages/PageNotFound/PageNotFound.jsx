// import NotFound from "../../images/not-found.jpg";
import { useHistory } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  let history = useHistory();

  return (
    <section>
      <div className={styles.notFoundOuter}>
        <div className={styles.notFoundTextBox}>
          <h2>Oops!</h2>
          <h3>Page Not Found</h3>
          <button onClick={() => history.push("/")}>Back to home</button>
        </div>
        <div className={styles.notFoundIconBox}>
          <img src="../assets/page-not-found.png" alt="Not Found Icon" /> 
        </div>
      </div>
    </section>
  );
}

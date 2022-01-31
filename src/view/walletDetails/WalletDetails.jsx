import React from "react";
import styles from "./walletDetails.module.css";
import { ProgressBar } from "react-bootstrap";
const WalletDetails = () => {
  const now = "100.00";
  return (
    <div className={styles.walletDetailBackground}>
      <div className="d-flex flex-row">
        <div className={styles.upperLeftSide}>
          <h6>Your balance</h6>
          <h4>0.0000 BUSD</h4>
          <h5>0.0000 BNB</h5>
          <h6>Your approved amount:</h6>
          <span>0.0000 BUSD</span>
        </div>
        <div className={styles.upperRightSide}>
          <h6>Your tier</h6>
          <span>-</span>
        </div>
      </div>
      <hr className={styles.htag} />
      <div className="text-white">
        <span>CLOSED</span>
      </div>
      <hr className={styles.htag} />
      <div className="d-flex flex-row">
        <div className={styles.lowerLeftSide}>
          <h6>Swapped</h6>
          <h5>0.0000 BUSD</h5>
          <h6>0.0000 WWY</h6>
        </div>
        <div className={styles.lowerRightSide}>
          <h6>Remaining Allocation:</h6>
          <h5>0.0000 BUSD</h5>
        </div>
      </div>
      <hr className={styles.htag} />
      <div className={styles.progressSection}>
        <h6>Swap progress</h6>
        <ProgressBar now={now} className={styles.progressBarSection} />
        <div className="d-flex flex-row justify-content-between m-1">
          <span className={styles.percentData}>{now}%</span>
          <h6>300006.4960/300000 BUSD</h6>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;

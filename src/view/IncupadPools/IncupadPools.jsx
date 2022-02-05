import React from "react";
import { useParams } from "react-router-dom";
import IncupadNavbar from "../incupad/section/IncupadNavBar";
import PageNotFound from "../PageNotFound/PageNotFound";
import IncupadPoolsBanner from "./section/IncupadPoolsBanner";
import IncupadPoolsInformation from "./section/IncupadPoolsInformation";
import { poolData } from "../../data";
import WalletDetails from "../walletDetails/WalletDetails";

const IncupadPools = () => {

  let address = window.sessionStorage.getItem("walletAddress");

     

  const { title } = useParams();  
  const activePool = poolData.find(
    (item) => item.title.replaceAll(" ", "-") === title
  );   

  return activePool !== undefined ? (
    <section>
      <IncupadNavbar /> 
      <IncupadPoolsBanner activePool={activePool} />
      <IncupadPoolsInformation activePool={activePool} />
       { address ? <WalletDetails activePool={activePool} /> : <WalletDetails activePool={activePool}/> }
   
    </section>
  ) : (
    <PageNotFound />
  );
};

export default IncupadPools;

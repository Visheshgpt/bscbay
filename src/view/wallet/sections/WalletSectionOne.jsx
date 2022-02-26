import React, { useEffect, useState } from "react";
import Web3 from "web3";
import BSCBAYabi from "../../../shared/BSCBAYabi.json";
import CoinGecko from "coingecko-api";

import AlertModal from '../../../components/AlertModal';

import contractService from '../../../shared/LMcontractservice';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { currentTimeData } from "../../../utils/helper";


const WalletSectionOne = () => {
  const boxArr = [
    {
      title: "USDT Reward Pool",
      subTitle: "TBA",
    }, 
    {
      title: "USDT Reward Limit",
      subTitle: "TBA",
    },

    {
      title: "Current 1 million BSBAY Price ($)",
      subTitle: "TBA",
    },

    {
      title: "Total Buyback",
      subTitle: "TBA",
    },

    {
      title: "Total Liquidity Pool ($)",
      subTitle: "TBA",
    },

    {
      title: "Total Holders",
      subTitle: "TBA",
    },
  ];

  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [totalUSDTdistributed, settotalUSDTdistributed] = useState(0);
  const [holders, setholders] = useState(0);
  const [buyback, setbuyback] = useState(0);
  const [userInfo, setuserInfo] = useState({});
  const [userbalance, setuserbalance] = useState(0);
  const [Lpbscbay, setLpbscbay] = useState(0);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [txMessage, settxMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [successPageReload, setSuccessPageReload] = useState('');

  let address;
  let selectedAccount;

  function web3apis2() {

    const web3 = new Web3("https://bsc-dataseed.binance.org/");

    var contractABI = BSCBAYabi;
    var contractAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

      // total USDT distributed
      contract.methods
      .getTotalDividendsDistributed()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        settotalUSDTdistributed(Number(web3.utils.fromWei(tokens, "ether")));
      });

      // total number of holder
      contract.methods
      .getNumberOfDividendTokenHolders()
      .call()
      .then((holders) => {
        setholders(Number(holders));
      });

      // total Buyback
      contract.methods
      .totalbuyback()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        setbuyback(Number(web3.utils.fromWei(tokens, "ether")));
      });

      // get TotalBNB in liquidity Pool
      var wrappednBNBABI = [
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ];
      var wrappedBNBcontractAddress =
        "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

      var wrappedBNBcontract = new web3.eth.Contract(
        wrappednBNBABI,
        wrappedBNBcontractAddress
      );

      wrappedBNBcontract.methods
        .balanceOf("0x30e3a76f435908414d42A92505497B3681F5504A")
        .call()
        .then((balance) => {
          var tokens = web3.utils.toBN(balance).toString();
          setLPbnb(Number(web3.utils.fromWei(tokens, "ether")));
        });   


     // get token Balance in LP
      contract.methods
      .balanceOf("0x30e3a76f435908414d42A92505497B3681F5504A")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLpbscbay(Number(web3.utils.fromWei(tokens, "ether")));
      });

    //  circulating Supply LM token
    contract.methods
      .balanceOf("0x000000000000000000000000000000000000dEaD")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        var csupply =
          Number(1000000) - Number(web3.utils.fromWei(tokens, "ether"));
        setcirculatingSupply(csupply);
      });

      // fetch latest 1 BNB price
      const CoinGeckoClient = new CoinGecko();
      // fetch price of 1 BNB
      CoinGeckoClient.simple
        .price({
          ids: ["binancecoin"],
          vs_currencies: ["usd"],
        })
        .then((data) => {
          setoneBNBprice(Number(data.data.binancecoin.usd));
        });  
  

  }

 function web3apis3() {
 
   address =  window.sessionStorage.getItem('walletAddress');

   if (address) {

    // if (!address) return;
    const web3 = new Web3("https://bsc-dataseed.binance.org/");
    var contractABI = BSCBAYabi;
    var contractAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

     
    // user Balance
      contract.methods
      .balanceOf(address)
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        setuserbalance(Number(web3.utils.fromWei(tokens, "ether")));
      });

     
      // total number of holder
      contract.methods
      .getAccountDividendsInfo(address)
      .call()
      .then((userdetails) => {
        console.log("UserInfo", userdetails);
        console.log("typeof",typeof userdetails);
        // setuserInfo(userdetails);
        const obj = {};
        let userpending =  Number(web3.utils.fromWei(web3.utils.toBN(userdetails[3]).toString(), "ether"))
        let usertotalclaimed = Number(web3.utils.fromWei(web3.utils.toBN(userdetails[4]).toString(), "ether"))

        obj["pending"] = userpending; 
        obj["claimed"] = usertotalclaimed;
        obj["queue"] = userdetails[2];
        obj["lastclaim"] = userdetails[5];
        obj["nextclaim"] = userdetails[6];
        setuserInfo(obj);
      });
   }  
 }


useEffect(() => {
  web3apis3();
},[])


useEffect(() => {
  web3apis2();
},[])

useEffect(() => {
  const loginType = localStorage.getItem('loginType');
  let provider =
    window.ethereum || window.BinanceChain || Web3.givenProvider || loginType;

  if (typeof provider !== 'undefined' && address) {
    if (loginType === 'walletconnect') {
      console.log('acc');

      const wprovider = new WalletConnectProvider({
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        },
      });

      wprovider.on('accountsChanged', async function (accounts) {
        selectedAccount = accounts[0];
        address = selectedAccount;
        //  window.ethereum.eth.requestAccounts();
        console.log('acc', selectedAccount);
        window.sessionStorage.setItem('walletAddress', selectedAccount);

        window.location.reload();
      });
    } else {
      window.ethereum.on('accountsChanged', async function (accounts) {
        // const web3 = new Web3(
        //   new Web3.providers.HttpProvider(
        //     'https://data-seed-prebsc-2-s1.binance.org:8545/'
        //   )
        // );

        selectedAccount = accounts[0];
        address = selectedAccount;
        //  window.ethereum.eth.requestAccounts();
        console.log('acc', selectedAccount);
        window.sessionStorage.setItem('walletAddress', selectedAccount);

        window.location.reload();
      });

      window.ethereum.on('chainChanged', (chainId) => {
        console.log('chainId', chainId);
        console.log('type of chainId', typeof chainId);

        if (chainId != '0x38' ) {
          settxMessage('Please Connect to "Binance Smart Chain Network"');
          setModalShow(true);
        } else {
          window.location.reload();
        }
      });
    }
  }
}, [address]);


// let priceperToken = (((1000000 * LPbnb) / Lpbscbay) * oneBNBprice) / 1000000;
let permillbcbs = ((1000000 * LPbnb) / Lpbscbay) * oneBNBprice;
console.log("pmb", permillbcbs);


const claim = async () => { 
  
  const web3 = await contractService.getWeb3Client(); 
  address = window.sessionStorage.getItem('walletAddress');

  if (web3) {
    try {
      var contractABI = BSCBAYabi;
      var contractAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
      var contract = new web3.eth.Contract(contractABI, contractAddress);
      const gasPrice = await web3.eth.getGasPrice();

      console.log('Claim called ==>');

      let redeemedtokens = Number(userInfo.pending);
      console.log("redeemedtokens", redeemedtokens);

      contract.methods
        .claim()
        .send({ from: address, gasPrice: web3.utils.toHex(gasPrice * 1.6) })
        .then(function (receipt) {
          console.log(receipt);

          if (receipt.status) {
            setSuccessPageReload('sucess');
            // setclaimableTokens(0);
            settxMessage('');
            setModalShow(true);
            // alert("Transaction Success");
            settxMessage(
              `Awesome ! You Have Successfully Claimed ${redeemedtokens} BSCB Tokens !`
            );
            // setButtonLoading(false);
          } else {
            settxMessage('Transaction Failed');
            setModalShow(true);
            // alert("Transaction Failed");
            // setButtonLoading(false);
          }
        })
        .catch((e) => {
          console.log('error is', e);
          settxMessage('Transaction Failed!');
          setModalShow(true);
          // setButtonLoading(false);
          //  alert("Transaction Failed!");
          //  window.location.reload();
        });
    } catch {
      settxMessage('Transaction Failed!');
      setModalShow(true);
      // setButtonLoading(false);
      // alert("Transaction Failed!");
    }
  } else {
    settxMessage('Change network to binance');
    setModalShow(true);
    // setButtonLoading(false);
    // alert("Change network to binance");
  }
};


  return (
    <div>
      {/* Header Start */}
      <header className="mb-4">
        <div className="d-flex flex-wrap">
          <div className="me-auto">
            <div className="text-primary title-small fw-normal">
              {/* Total USDT distributed */}
            </div>
          </div>
          <div className="text-sm-end">
            <div className="text-small text-white-2">
              Today BCBS <b>{permillbcbs.toFixed(1)}</b>$/Million{" "}
            </div>
            <div className="text-small"></div>
          </div>
        </div>
      </header>

      <section className="d-flex flex-wrap">
        {/* First Card Section */}
        <div className="card__wrapper card__two">
          <div className="card__50">
            <h4>
              <span className="text-primary">{Number(userInfo.claimed).toFixed(1)}</span> USDT
            </h4>
            <h4>USDT Rewarded To You</h4>
          </div>
          <div className="card__50">
            <h4>
              <span className="text-primary">{Number(userInfo.pending).toFixed(1)}</span> USDT
            </h4>
            <h6>Pending USDT Payout</h6>
     
      {  (currentTimeData() > userInfo.nextclaim && userInfo.nextclaim !=0) &&  <div> <button onClick={() => claim()} className="card__button">Claim Now</button>
                <br></br>
                 <span className="card__wait">(Or wait  in queue: {userInfo.queue})</span></div>   }

          </div>
        </div>
        {/* Second Card Section */}
        <div className="card__wrapper card__two">
          <div className="card__50">
            <div className="card__double__text">
              <h4>Last Payout Time</h4>
              <h4>
                <span className="text-primary">
                 {/* {userInfo.lastclaim} */}
                 {new Date(userInfo.lastclaim* 1000).toLocaleString("en-US",{weekday: "long"})}, {new Date(userInfo.lastclaim* 1000).toLocaleString("en-US",{month: "long"})} {new Date(userInfo.lastclaim* 1000).toLocaleString("en-US",{day: "numeric"})}, {new Date(userInfo.lastclaim* 1000).toLocaleString("en-US",{year: "numeric"})}  {new Date(userInfo.lastclaim * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </span>
              </h4>
            </div>
            <div className="card__double__text">
              <h4>Upcoming Payout Unlock At</h4>
              <h4>
                <span className="text-primary">
                 {/* {userInfo.nextclaim} */}
                 {new Date(userInfo.nextclaim* 1000).toLocaleString("en-US",{weekday: "long"})}, {new Date(userInfo.nextclaim* 1000).toLocaleString("en-US",{month: "long"})} {new Date(userInfo.nextclaim* 1000).toLocaleString("en-US",{day: "numeric"})}, {new Date(userInfo.nextclaim* 1000).toLocaleString("en-US",{year: "numeric"})}  {new Date(userInfo.nextclaim * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}              
                </span>
              </h4>
            </div>
          </div>
          <div className="card__50">
            <h4>Your Holding</h4>
            <h4>
              <span className="text-primary">{userbalance.toFixed(1)} BSCB</span>
            </h4>
          </div>
        </div>
        <AlertModal
        show={modalShow}
        onHide={setModalShow}
        successpagereload={successPageReload}>
        <p>{txMessage}</p>
      </AlertModal>
      </section>

      {/* <h1 className="text-center dashboard__info__heading">Investor Relations</h1> */}
      <section className="d-flex flex-wrap">
        <div className="card__wrapper card__one">
          <div className="card__100">
            <h3>
              Total USDT Distributed to{" "}
              <span className="text-primary">BSC</span>
              Bay Holders
            </h3>
            <h1>
              <span className="text-primary">{totalUSDTdistributed.toFixed(1)}</span> USDT
            </h1>
          </div>
        </div>

        <div className="card__wrapper card__one">
          <div className="card__100 flex-row justify-content-between p-5 align-items-center">
            <h6>Total Buy-Back and Burnt</h6>
            <h6>
              <span className="text-primary">{(buyback*oneBNBprice).toFixed(1)} </span> USDT
            </h6>
          </div>
        </div>
      </section>

      <section className="d-flex flex-wrap">
        <div className="card__wrapper card__three">
          <div className="card__33">
            <h4>No Of Holders</h4>
            <h4>
              <span className="text-primary">{holders}</span>
            </h4>
          </div>
          <div className="card__33">
            <h4>Total Liquidity Pool</h4>
            <h4>
              <span className="text-primary">$ {(LPbnb*oneBNBprice).toFixed(1)} | BNB {LPbnb.toFixed(1)}</span>
            </h4>
          </div>
          <div className="card__33">
            <h4>BSCB Price in Mn</h4>
            <h4>
              <span className="text-primary">$ {permillbcbs.toFixed(1)}</span>
            </h4>
          </div>
        </div>
      </section>
      {/* Main End */}
      {/* Table Start */}

      {/* Table End */}
    </div>
  );
};

export default WalletSectionOne;

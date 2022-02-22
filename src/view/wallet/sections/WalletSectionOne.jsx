import React, { useEffect, useState } from "react";
import Web3 from "web3";
import BSCBAYabi from "../../../shared/BSCBAYabi.json";
import CoinGecko from "coingecko-api";

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

  const [maxTransactionAmount, setmaxTransactionAmount] = useState(0);
  const [TotalbnbinrewardPool, setTotalbnbinrewardPool] = useState(0);
  const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);
  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [LMBalanceuser, setLMBalanceuser] = useState(0);
  const [bnbreward, setbnbreward] = useState(0);
  const [nextAvailableclaim, setnextAvailableclaim] = useState(0);
  const [user, setUser] = useState(false);
  const [value, setValue] = useState(0);
  const [previousbnbreward, setpreviousbnbreward] = useState(0);
  const [totaldistributedBnb, settotaldistributedBnb] = useState(0);
  const [userclaimBnb, setuserclaimBnb] = useState(0);
  const [totalreinvested, settotalreinvested] = useState(0);
  const [userreinvested, setuserreinvested] = useState(0);
  const [rewardhardCap, setrewardhardCap] = useState(0);

  function web3apis() {
    let address = window.sessionStorage.getItem("walletAddress");

    if (!address) return;
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

    var contractABI = BSCBAYabi;
    var contractAddress = "0x8b4202C2026C77e99f84805644bdcE2B9541598c";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.methods
      ._maxTxAmount()
      .call()
      .then((amount) => {
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setmaxTransactionAmount(Number(web3.utils.fromWei(tokens, "ether")));
      });

    web3.eth
      .getBalance("0x8b4202C2026C77e99f84805644bdcE2B9541598c")
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setTotalbnbinrewardPool(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // total claimed BNb
    contract.methods
      .totalClaimedBNB()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        settotaldistributedBnb(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // user claimed BNb
    contract.methods
      .userClaimedBNB(address)
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        setuserclaimBnb(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // total reinvested bnb
    contract.methods
      .totalreinvested()
      .call()
      .then((amount) => {
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        settotalreinvested(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // user reinvested
    contract.methods
      .userreinvested(address)
      .call()
      .then((amount) => {
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setuserreinvested(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get reward Hard CAP limit
    contract.methods
      .rewardHardcap()
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setrewardhardCap(Number(web3.utils.fromWei(tokens, "ether")));
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
      "0xae13d989dac2f0debff460ac112a837c89baa7cd";

    var wrappedBNBcontract = new web3.eth.Contract(
      wrappednBNBABI,
      wrappedBNBcontractAddress
    );

    wrappedBNBcontract.methods
      .balanceOf("0xDd25d5c356Ff41feB5846c6E2960995925ED7938")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLPbnb(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get token in LP
    contract.methods
      .balanceOf("0xDd25d5c356Ff41feB5846c6E2960995925ED7938")
      .call()
      .then((balance) => {
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setLMbalanceLPpool(Number(web3.utils.fromWei(tokens, "ether")));
      });

    //  circulating Supply LM token
    contract.methods
      .balanceOf("0x000000000000000000000000000000000000dEaD")
      .call()
      .then((balance) => {
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
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

    // LM BALANCE user
    contract.methods
      .balanceOf(address)
      .call()
      .then((balance) => {
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setLMBalanceuser(web3.utils.fromWei(tokens, "ether"));
      });

    contract.methods
      .calculateBNBReward(address)
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setbnbreward(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // next Available Claim Date API

    contract.methods
      .nextAvailableClaimDate(address)
      .call()
      .then((time) => {
        setnextAvailableclaim(time);
        if (time == 0) {
          setUser(true);
        }
      });
  }

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
              Today BCBS <b>TBA</b>/Million{" "}
            </div>
            <div className="text-small"></div>
          </div>
        </div>
      </header>
      {/* Header End */}
      {/* Main Start */}
      {/* <h1 className="text-center">Information</h1> */}
      <section className="d-flex flex-wrap">
        {/* First Card Section */}
        <div className="card__wrapper card__two">
          <div className="card__50">
            <h4>
              <span className="text-primary">0.009</span> USDT
            </h4>
            <h4>USDT Rewarded To You</h4>
          </div>
          <div className="card__50">
            <h4>
              <span className="text-primary">0.000</span> USDT
            </h4>
            <h6>Pending USDT Payout</h6>
            <button className="card__button">Claim Now</button>
            <span className="card__wait">(Or wait in queue: 7878)</span>
          </div>
        </div>
        {/* Second Card Section */}
        <div className="card__wrapper card__two">
          <div className="card__50">
            <div className="card__double__text">
              <h4>Last Payout Time</h4>
              <h4>
                <span className="text-primary">
                  Wed, 09 Feb 2022 21:01:47 GMT
                </span>
              </h4>
            </div>
            <div className="card__double__text">
              <h4>Upcoming Payout Unlock At</h4>
              <h4>
                <span className="text-primary">
                  Wed, 09 Feb 2022 23:01:47 GMT
                </span>
              </h4>
            </div>
          </div>
          <div className="card__50">
            <h4>Your Holding</h4>
            <h4>
              <span className="text-primary">0.000 BSCB</span>
            </h4>
          </div>
        </div>
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
              <span className="text-primary">257100.09</span> USDT
            </h1>
          </div>
        </div>

        <div className="card__wrapper card__one">
          <div className="card__100 flex-row justify-content-between p-5 align-items-center">
            <h6>Total Buy-Back and Burnt</h6>
            <h6>
              <span className="text-primary">257100.09 | 1,000,000</span> BSCB
            </h6>
          </div>
        </div>
      </section>

      <section className="d-flex flex-wrap">
        <div className="card__wrapper card__three">
          <div className="card__33">
            <h4>No Of Holders</h4>
            <h4>
              <span className="text-primary">8000</span>
            </h4>
          </div>
          <div className="card__33">
            <h4>Total Liquidity Pool</h4>
            <h4>
              <span className="text-primary">$ 100,000 | BNB 1200</span>
            </h4>
          </div>
          <div className="card__33">
            <h4>BSCB Price in Mn</h4>
            <h4>
              <span className="text-primary">$0.005</span>
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

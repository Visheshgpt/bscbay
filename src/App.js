import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import Routes from './routes.js';
import Layout from './layout/index';
import BSCBAYICOabi from './shared/BSCBAYICO.json';
import {
  addMinAllocation,
  addMaxAllocation,
  addICOCompletePercentage,
} from './redux/slices/poolsDataSlice';

import {
  adddMinAllocation,
  adddMaxAllocation,
  adddICOCompletePercentage,
} from './redux/slices/dexpadDataSlice';

function App() {
  const poolsdata = useSelector((state) => state.pooldata);
  const dexpadData = useSelector((state) => state.dexpaddata);
  const dispatch = useDispatch();

  useEffect(() => {
    const addressArray = poolsdata.address;
    if (addressArray && addressArray.length > 0) {
      addressArray.map(async (item) => {
        const web3 = new Web3(item.chainUrl);
        const contract = new web3.eth.Contract(BSCBAYICOabi, item.address);
        const amnt = await contract.methods.minInvestment().call();
        const tokens = web3.utils.toBN(amnt).toString();
        const min = Number(web3.utils.fromWei(tokens, 'ether'));
        if (min) {
          const payload = {
            [item.id]: min,
          };
          dispatch(addMinAllocation(payload));
        }

        const amnt2 = await contract.methods.maxInvestment().call();
        const tokens2 = web3.utils.toBN(amnt2).toString();
        const max = Number(web3.utils.fromWei(tokens2, 'ether'));
        if (max) {
          const payload = {
            [item.id]: max,
          };
          dispatch(addMaxAllocation(payload));
        }

        const amnt3 = await contract.methods.tokensForDistribution().call();
        const tokens3 = web3.utils.toBN(amnt3).toString();
        const alloctoken = Number(web3.utils.fromWei(tokens3, 'ether'));

        // get MAX DISTRIBUTED TOKENS
        const amnt4 = await contract.methods.maxDistributedTokenAmount().call();
        const tokens4 = web3.utils.toBN(amnt4).toString();
        const maxdistributed = Number(web3.utils.fromWei(tokens4, 'ether'));

        if (alloctoken >= 0 && maxdistributed > 0) {
          const ICOPercentage = ((alloctoken / maxdistributed) * 100).toFixed(
            2
          );
          const payload = {
            [item.id]: ICOPercentage,
          };
          dispatch(addICOCompletePercentage(payload));
        }
      });
    }

    const dAddressArray = dexpadData.dAddress;
    if (dAddressArray && dAddressArray.length > 0) {
      dAddressArray.map(async (item) => {
        const web3 = new Web3(item.chainUrl);
        const contract = new web3.eth.Contract(BSCBAYICOabi, item.address);
        const amnt = await contract.methods.minInvestment().call();
        const tokens = web3.utils.toBN(amnt).toString();
        const min = Number(web3.utils.fromWei(tokens, 'ether'));
        if (min) {
          const payload = {
            [item.id]: min,
          };
          dispatch(adddMinAllocation(payload));
        }
        const amnt2 = await contract.methods.maxInvestment().call();
        const tokens2 = web3.utils.toBN(amnt2).toString();
        const max = Number(web3.utils.fromWei(tokens2, 'ether'));
        if (max) {
          const payload = {
            [item.id]: max,
          };
          dispatch(adddMaxAllocation(payload));
        }

        const amnt3 = await contract.methods.tokensForDistribution().call();
        const tokens3 = web3.utils.toBN(amnt3).toString();
        const alloctoken = Number(web3.utils.fromWei(tokens3, 'ether'));

        // get MAX DISTRIBUTED TOKENS
        const amnt4 = await contract.methods.maxDistributedTokenAmount().call();
        const tokens4 = web3.utils.toBN(amnt4).toString();
        const maxdistributed = Number(web3.utils.fromWei(tokens4, 'ether'));

        if (alloctoken >= 0 && maxdistributed > 0) {
          const ICOPercentage = ((alloctoken / maxdistributed) * 100).toFixed(
            2
          );
          const payload = {
            [item.id]: ICOPercentage,
          };
          dispatch(adddICOCompletePercentage(payload));
        }
      });
    }
  }, []);
  return (
    <div className='wrapper'>
      <Layout>
        <main className='main-container scroll-box-auto shadow border-start border-end border-dark px-0 container-xxl d-flex flex-column'>
          <Routes />
        </main>
      </Layout>
    </div>
  );
}

export default App;

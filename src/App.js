import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import Routes from './routes.js';
import Layout from './layout/index';
import BSCBAYICOabi from './shared/BSCBAYICO.json';
import BSCBAYIDOabi from './shared/BSCBAYIDO.json';

import {
  addMinAllocations,
  addMaxAllocations,
  addICOCompletePercentage,
} from './redux/slices/poolsDataSlice';

import {
  adddMinAllocation,
  adddMaxAllocation,
  adddICOCompletePercentage,
} from './redux/slices/dexpadDataSlice';

import { converttoEther, getPayload } from './utils/helper.js';

function App() {
  const poolsdata = useSelector((state) => state.pooldata);
  const dexpadData = useSelector((state) => state.dexpaddata);
  // const newpoolData = useSelector((state) => state.poolnewdata);
  const dispatch = useDispatch();
  
  const { address, idoAddress } = poolsdata;


  useEffect(() => {
    if (address && address.length > 0) {
      address.map(async (item) => {
        const web3 = new Web3(item.chainUrl);
        const contract = new web3.eth.Contract(BSCBAYICOabi, item.address);
        const amnt = await contract.methods.minInvestment().call();
        const tokens = web3.utils.toBN(amnt).toString();
        const min = Number(web3.utils.fromWei(tokens, 'ether'));
        if (min) {
          const payload = getPayload('normal', item.id, min);
          dispatch(addMinAllocations(payload));
        }

        const amnt2 = await contract.methods.maxInvestment().call();
        const tokens2 = web3.utils.toBN(amnt2).toString();
        const max = Number(web3.utils.fromWei(tokens2, 'ether'));
        if (max) {
          const payload = getPayload('normal', item.id, max);
          dispatch(addMaxAllocations(payload));
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
          const payload = getPayload('normal', item.id, ICOPercentage);
          dispatch(addICOCompletePercentage(payload));
        }
      });
    }

    if (idoAddress && idoAddress.length > 0) {
      idoAddress.map(async (item) => {
        const web3 = new Web3(item.chainUrl);
        const contract = new web3.eth.Contract(BSCBAYIDOabi, item.address);
        const amnt = await contract.methods.minInvestment().call();
        const tokens = web3.utils.toBN(amnt).toString();
        const min = Number(web3.utils.fromWei(tokens, 'ether'));
        if (min) {
          const payload = getPayload('ido', item.id, min);
          dispatch(addMinAllocations(payload));
        }

        const amnt2 = await contract.methods.Tier1maxInvestment().call();
        const tokens2 = web3.utils.toBN(amnt2).toString();
        const max = Number(web3.utils.fromWei(tokens2, 'ether'));
        // console.log("max", max);
        if (max) {
          const payload = getPayload('ido', item.id, max);
          dispatch(addMaxAllocations(payload));
        }

        const amnt3 = await contract.methods.totalBNBraise().call();
        const tokens3 = web3.utils.toBN(amnt3).toString();
        const alloctoken = Number(web3.utils.fromWei(tokens3, 'ether'));

        // get MAX DISTRIBUTED TOKENS
        const amnt4 = await contract.methods.hardCap().call();
        const tokens4 = web3.utils.toBN(amnt4).toString();
        const maxdistributed = Number(web3.utils.fromWei(tokens4, 'ether'));

        if (alloctoken >= 0 && maxdistributed > 0) {
          const ICOPercentage = ((alloctoken / maxdistributed) * 100).toFixed(
            2
          );
          const payload = getPayload('ido', item.id, ICOPercentage);
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
        // const tokens = web3.utils.toBN(amnt).toString();
        const min = converttoEther(web3, amnt, 18);
        if (min) {
          const payload = {
            [item.id]: min,
          };
          dispatch(adddMinAllocation(payload));
        }
        const amnt2 = await contract.methods.maxInvestment().call();
        // const tokens2 = web3.utils.toBN(amnt2).toString();
        const max = converttoEther(web3, amnt2, 18);
        if (max) {
          const payload = {
            [item.id]: max,
          };
          dispatch(adddMaxAllocation(payload));
        }

        const amnt3 = await contract.methods.tokensForDistribution().call();
        // const tokens3 = web3.utils.toBN(amnt3).toString();
        const alloctoken = converttoEther(web3, amnt3, item.decimal);

        // get MAX DISTRIBUTED TOKENS
        const amnt4 = await contract.methods.maxDistributedTokenAmount().call();
        // const tokens4 = web3.utils.toBN(amnt4).toString();
        const maxdistributed = converttoEther(web3, amnt4, item.decimal);

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
  }, [address, dispatch, dexpadData.dAddress, idoAddress]);
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

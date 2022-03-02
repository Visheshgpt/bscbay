import { poolData } from '../data';
import { staticData } from '../staticdata'; 
import { chainRpcs } from '../chainRPCs';
import Web3 from 'web3';

import ERC20abi from '../shared/BSCBAYabi.json'

export const getMonth = (num) => {
  const arr = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return arr[num];
};

export const MyDiv = ({ classes = '', type = '', children }) => {
  let posclass = '';
  if (type === 'center') posclass = 'justify-content-center';
  if (type === 'between') posclass = 'justify-content-between';
  if (type === 'around') posclass = 'justify-content-around';
  return (
    <div className={`d-flex align-items-center ${posclass} ${classes}`}>
      {children}
    </div>
  );
};

export const getFeaturedPoolsData = () => {
  const featuredPoolData = poolData.filter((item) => item.featured === true);
  featuredPoolData.reverse();

  return featuredPoolData;
};

export const getAddress = (data) => {
  let addressArray = [];
  data.map((item) =>
    addressArray.push({
      address: item.contractAddress,
      id: item.id,
      chainUrl: chainRpcs[item.chain],
      decimal: item.decimals,
    })
  );
  return addressArray;
};

export const currentTimeDate = () => {
  const currentTime = new Date();
  const currentTimeDate = Number(Date.parse(currentTime) / 1000);
  return currentTimeDate;
};

export const currentTime = () => {
  return new Date();
};

export const getStaticDataByType = (value) => {
  return staticData.filter((item) => item.status === value);
};

 
export const converttoEther = (web3, amount, decimal) => {
       
  if (decimal === 9) {
      var gwei = web3.utils.toBN(amount).toString();
      var tokens = web3.utils.toWei(gwei,"Gwei");
      return Number(web3.utils.fromWei(tokens, 'ether')) 
    }
  
  if (decimal === 18) {
      var tokens = web3.utils.toBN(amount).toString();
      return Number(web3.utils.fromWei(tokens, 'ether'))
    } 

}



export const getUserBSCBAYBalance = (address) => {
       
  var contractTokenABI = ERC20abi;
  var contractTokenAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
  
  const web3 = new Web3("https://bsc-dataseed.binance.org/");
  
  var Tokencontract = new web3.eth.Contract(
    contractTokenABI,
    contractTokenAddress
  );
   
  let balance;

 return new Promise((resolve, reject) => {

  Tokencontract.methods
  .balanceOf(address)
  .call()
  .then((amount) => {
    
  balance = converttoEther(web3, amount, 18)    
    window.sessionStorage.setItem(
      'userBSCB',
      balance
    );
  });
     
  resolve(balance);
 })
}
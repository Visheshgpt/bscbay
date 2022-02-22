import Web3 from 'web3';

export async function web3apis(url = '') {
  const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  console.log('web3 api called');
}

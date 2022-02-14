import React, { useEffect, useState } from 'react';
import AlertModal from '../../components/AlertModal';

import Web3 from 'web3';
import BSCBAYICOabi from '../../shared/BSCBAYICO.json';

function Search({ show, onHide }) {
  const [value, setValue] = useState('');

  const [message, setMessage] = useState('');

  async function checkWhitelist() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      )
    );

    var contractABI = BSCBAYICOabi;
    var contractAddress = '0x32f1cf65767228e95bedfF347c2B0F3D78973F83';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // check eligibility
    const iswhitelisted = await contract.methods.checkWhitelisted(value).call();
    console.log('check ====>', iswhitelisted);

    if (iswhitelisted) {
      setMessage(`Congratulations !\n Your Wallet is Whitelisted !`);
    } else {
      setMessage(
        `Oops, The Wallet is Not Whitelisted! Please Check Wallet Eligibility Criteria. `
      );
    }
  }

  return (
    <AlertModal show={show} onHide={onHide}>
      <div className='incupad_search'>
        <div>
          <input
            type='text'
            id='html'
            name='search'
            className='input mt-4'
            placeholder='Enter Wallet Address'
            onChange={(e) => setValue(e.target.value)}
          />
          <div className='my-2'>{message}</div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn_primary mt-2' onClick={checkWhitelist}>
            Check Whitelist
          </button>
        </div>
      </div>
    </AlertModal>
  );
}

export default Search;

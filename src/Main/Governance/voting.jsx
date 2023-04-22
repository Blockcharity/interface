import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Blockcharity from '../../Contracts/Blockcharity';
import contractAddress from '../../Contracts/contractAddress';
import "./Voting.css"

const VoteInterface = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [votingStatus, setVotingStatus] = useState('inactive');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const [voteAmount, setVoteAmount] = useState(0);

  useEffect(() => {
    const loadOrganizations = async () => {
      try {
        const orgList = await Blockcharity.methods.getOrganizations().call();
        setOrganizations(orgList);
      } catch (error) {
        console.error(error);
      }
    };
    loadOrganizations();
  }, []);

  const handleVote = async (event) => {
    event.preventDefault();
    setVotingStatus('pending');
    setErrorMessage('');

    try {
      const web3 = new Web3(window.ethereum);

      const networkId = await web3.eth.net.getId();
      if (networkId !== 4002) throw new Error('Please connect to Fantom.');

      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];

      const balance = await web3.eth.getBalance(account);
      if (balance < voteAmount) throw new Error('You do not have enough balance to vote.');

      const txObject = {
        from: account,
        to: contractAddress,
        data: Blockcharity.methods.vote(selectedOption).encodeABI(),
        value: web3.utils.toWei(String(voteAmount), 'ether'),
      };

      const gas = await web3.eth.estimateGas(txObject);
      const gasPrice = await web3.eth.getGasPrice();
      const tx = { ...txObject, gas, gasPrice };

      const transaction = await web3.eth.sendTransaction(tx);
      setTransactionHash(transaction.transactionHash);
      setVotingStatus('complete');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setVotingStatus('inactive');
    }
  };

  return (
    <div className="vote-form">
  <h2 className="vote-title">Vote on Blockcharity V1</h2>
  <form onSubmit={handleVote}>
    {organizations.map((org) => (
      <div key={org.id} className="org-option">
        <label>
          <input
            type="radio"
            value={org.id}
            checked={selectedOption === org.id}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <span className="org-name">{org.name}</span>
        </label>
      </div>
    ))}
    <div className="vote-amount">
      <label>
        Vote amount (in FTM):
        <input type="number" value={voteAmount} onChange={(e) => setVoteAmount(e.target.value)} />
      </label>
    </div>
    <button className="vote-button" type="submit" disabled={!selectedOption || votingStatus === 'pending'}>
      {votingStatus === 'pending' ? 'Submitting vote...' : 'Submit vote'}
    </button>
  </form>
  {errorMessage && <p className="error-message">{errorMessage}</p>}
  {transactionHash && (
    <p className="transaction-hash">
      Transaction submitted:{' '}
      <a href={`https://ftmscan.com/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
        {transactionHash}
      </a>
    </p>
  )}
</div>
  );
};

export default VoteInterface;
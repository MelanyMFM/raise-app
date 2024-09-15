import React, { useEffect } from "react";
import getContract from "../../../contracts/token/contract"; // Adjust the path as needed
import './prueba.css';
import { ethers } from "ethers";

function Prueba() {
  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          console.error("User denied account access", error);
        }
      } else {
        console.error("No Ethereum provider found, install MetaMask.");
      }
    };
  
    connectWallet();
  }, []);

  const handleMint = async () => {
    const contract = await getContract();
    if (contract) {
      try {
        const amount = ethers.utils.parseUnits("10", 18); // Mint 10 tokens
        const transaction = await contract.mint(await contract.signer.getAddress(), amount);
        await transaction.wait();
        alert("Tokens minted successfully!");
      } catch (error) {
        console.error("Error minting tokens:", error);
      }
    }
  };

  const handleBurn = async () => {
    const contract = await getContract();
    if (contract) {
      try {
        const amount = ethers.utils.parseUnits("5", 18); // Burn 5 tokens
        const transaction = await contract.burn(amount);
        await transaction.wait();
        alert("Tokens burned successfully!");
      } catch (error) {
        console.error("Error burning tokens:", error);
      }
    }
  };

  const handleSend = async () => {
    const contract = await getContract();
    if (contract) {
      try {
        const recipient = "0x8A4bA2C57745DC8fD5D621721Ea03C448a97e2B9"; // Replace with recipient address
        const amount = ethers.utils.parseUnits("1", 18); // Send 1 token
        const transaction = await contract.transferTokens(recipient, amount);
        await transaction.wait();
        alert("Tokens sent successfully!");
      } catch (error) {
        console.error("Error sending tokens:", error);
      }
    }
  };

  return (
    <div className="button">
      <button className="send" onClick={handleSend}>Send</button>
      <button className="burn" onClick={handleBurn}>Burn</button>
      <button className="mint" onClick={handleMint}>Mint</button>
    </div>
  );
}

export default Prueba;

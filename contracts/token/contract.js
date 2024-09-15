import { ethers, JsonRpcProvider } from "ethers";
import contractABI from "./contractABI.json"; // Replace with the correct path to your ABI file

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; // Use the environment variable

const getContract = async () => {
  if (window.ethereum) {
    try {
      // Create a provider using the Kiichain RPC URL
      const provider = new JsonRpcProvider("https://a.sentry.testnet.kiivalidator.com:8645/");
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      // Create the contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      return contract;
    } catch (error) {
      console.error("Error creating contract instance:", error);
      return null;
    }
  } else {
    console.error("Ethereum object not found, install MetaMask.");
    return null;
  }
};

export default getContract;
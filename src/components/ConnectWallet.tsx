import { useState } from "react";
import toast from "react-hot-toast";
import Web3, { utils } from "web3";
import { formatWallet } from "../utils/formatWallet";
import { switchNetworkBnb } from "../utils/changeNetwork";

interface IConnectWalletProps {
  web3: Web3 | null;
}

const ConnectWallet: React.FC<IConnectWalletProps> = ({ web3 }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    if (web3 === null) {
      return;
    }
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const allAccounts = await web3.eth.getAccounts();
      setAccount(allAccounts[0]);
      await switchNetworkBnb(web3);
      if (window.ethereum.isMetaMask) {
        toast.success("Connected with MetaMask.");
      }

      setBalance(
        utils
          .fromWei(await web3.eth.getBalance(allAccounts[0]), "ether")
          .slice(0, 7)
      );
    } catch (error) {
      toast.error("Failed to connect with Metamask.");
      console.error(error);
    }
  };

  const handleDisconnect = () => {
    window.ethereum.request({
      method: "wallet_revokePermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    setAccount(null);
  };

  return (
    <>
      {balance && account && <p>Balance: {balance}</p>}
      <button
        onClick={handleConnectWallet}
        className="bg-gray-950 text-white p-2 rounded hover:bg-gray-900"
      >
        {account ? formatWallet(account) : "Connect Wallet"}
      </button>
      {account && (
        <button
          className="bg-gray-950 text-white p-2 rounded hover:bg-gray-900"
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      )}
    </>
  );
};

export default ConnectWallet;

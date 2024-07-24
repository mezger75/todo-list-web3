import { useEffect, useState } from "react";
import Web3 from "web3";
import GetCurrentEpoch from "./GetCurrentEpoch";
import ConnectWallet from "./ConnectWallet";

const Header: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  return (
    <header className="flex justify-end items-center gap-2">
      {web3 && <GetCurrentEpoch />}
      <ConnectWallet web3={web3} />
    </header>
  );
};

export default Header;

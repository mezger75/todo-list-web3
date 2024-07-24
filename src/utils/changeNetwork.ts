import Web3 from "web3";

export const switchNetworkBnb = async (web3: Web3) => {
  const provider = web3.currentProvider;

  if (typeof provider?.request !== "function") {
    throw new Error(
      "The current provider does not support the 'request' method."
    );
  }

  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }],
    });
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x38",
              chainName: "BNB Smart Chain",
              rpcUrls: ["https://rpc.ankr.com/bsc"],
              nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18,
              },
              blockExplorerUrls: ["https://bscscan.com/"],
            },
          ],
        });
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      console.error(error.message);
    }
  }
};

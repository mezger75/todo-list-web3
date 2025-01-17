export const formatWallet = (str: string | null) => {
  if (str === undefined || str === null) return "no wallet connected";
  const first5 = str?.slice(0, 6);
  const last4 = str?.slice(-4);
  return `${first5}...${last4}`;
};

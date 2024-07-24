import toast from "react-hot-toast";
import { contract } from "../contract/contract";

const GetCurrentEpoch: React.FC = () => {
  const handleCurrentEpoch = async () => {
    if (!contract) throw new Error("Contract not initialized");

    try {
      const epoch: bigint = await contract.methods.currentEpoch().call();
      toast.success(epoch.toString());
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleCurrentEpoch}
      className="bg-gray-950 text-white p-2 rounded hover:bg-gray-900"
    >
      Show Current Epoch
    </button>
  );
};

export default GetCurrentEpoch;

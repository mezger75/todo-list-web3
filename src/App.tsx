import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="flex h-screen overflow-auto bg-gradient-to-bl from-gray-600 to-gray-800 py-12 text-white'">
      <div className="w-full lg:w-[1440px] lg:mx-auto p-4">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;

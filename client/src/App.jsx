import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
import Web3 from "web3";

function App() {
  const  {contract} = EthProvider()
  console.log("contract no app = ", contract)
  return (
    <div id="App" >
      <div className="container">
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  
  );
}

export default App;

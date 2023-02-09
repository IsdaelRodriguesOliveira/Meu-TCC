//import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import Web3 from "web3";
import ContractSaldo from "./contexts/hooks/contractSaldo";

function App() {
  //const  {contract} = EthProvider()
  //console.log("contract no app = ", contract)
  const {saldo, contract} = ContractSaldo()
  return (
    <div id="App" >
      <div className="container">
        <hr />
        <p>Contrato:</p>
        <p>{saldo} Ethers</p>
        <hr />
        <hr />
      </div>
    </div>
  
  );
}

export default App;

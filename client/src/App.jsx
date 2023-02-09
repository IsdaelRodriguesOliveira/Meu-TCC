//import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import Web3 from "web3";
import ContractSaldo from "./contexts/hooks/contractSaldo";
import { UseMetaMask } from "./contexts/hooks/useWallet";

function App() {
  //const  {contract} = EthProvider()
  //console.log("contract no app = ", contract)
  const {saldo, contract} = ContractSaldo()
  const {isConnected, currentAccount, connectMetaMask} = UseMetaMask()
  //console.log("CurrentAccount",JSON.stringify(currentAccount))
  return (
    <div id="App" >
      <div className="container">
        <hr />
        <p>Contrato:</p>
        <p>{saldo} Ethers</p>
        <hr />
        <p>
          <button onClick={connectMetaMask}>Connect Wallet</button>
        </p>
        <hr />
      </div>
    </div>
  
  );
}

export default App;

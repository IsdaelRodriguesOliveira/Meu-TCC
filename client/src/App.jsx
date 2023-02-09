//import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import Web3 from "web3";
import ContractSaldo from "./contexts/hooks/contractSaldo";
import { UseMetaMask } from "./contexts/hooks/useWallet";
import Transaction from "./contexts/hooks/transaction";
import { useState } from "react";

function App() {
  //const  {contract} = EthProvider()
  //console.log("contract no app = ", contract)
  const {saldo, contract} = ContractSaldo()
  const {isConnected, currentAccount, connectMetaMask} = UseMetaMask()
  //console.log("CurrentAccount",JSON.stringify(currentAccount))
  const {OpenTransaction, CheckTransaction, DepositTransaction} = Transaction(currentAccount, contract)
  const [valor, setValor] = useState('')
  function submitOpenTransaction(){
    OpenTransaction(valor)

  }
  const [value, setValue] = useState('')
  const [code, setCode] = useState('')
  function submitt(){
    //console.log("Valor", value)
    //console.log("Codigo", code)
    DepositTransaction(value, code)
  }
  let valorData = 0
  return (
    <div id="App" >
      <div className="container">
        <hr />
        <p>Contrato:</p>
        <p>{saldo} Ethers</p>
        <input
          placeholder='Valor'
          value={valor}
          onChange={event => setValor(event.target.value)}
          required
        />
        <p>
          <button onClick={submitOpenTransaction}>Adicionar um boleto na lista de espera</button>
        </p>
        <hr />
        <p>Valor em espera {valorData}</p>
        <button onClick={ async () => {valorData = await CheckTransaction()}}>Verificar valor em espera</button>

        <hr />
        <p>Cliente</p>
        <p>Digite o numero do boleto</p>
        <p>
        <input
          placeholder='Codigo'
          value={code}
          onChange={event => setCode(event.target.value)}
          required
        />
        </p>
        <p>Digite o valor do boleto</p>
        <p>
        <input
          placeholder='Valor'
          value={value}
          onChange={event => setValue(event.target.value)}
          required
        />
        </p>
        <p>
          <button onClick={connectMetaMask}>Connect Wallet</button>
        </p>
        <p>
          <button onClick={submitt}>Depositar valor no contrato</button>
        </p>
        <hr />
      </div>
    </div>
  
  );
}

export default App;

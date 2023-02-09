//import { useState } from "react";

import Web3 from "web3";

const Transaction = (currentAccount, contract) => {
    const OpenTransaction = async (valor) => {
        try {
            console.log("Current Account", currentAccount)
            await contract.methods.abrir_transacao(currentAccount, Web3.utils.toWei(valor, "ether")).send({
                from: currentAccount,
            });
            
        } catch (error){
            console.log(error)
        }
    }

    const CheckTransaction = async () => {
        let valorData
        try{
            valorData = await contract.methods.registros_espera(currentAccount).call()

        } catch (error){
            console.log(error)
        }
        console.log("Valor em espera",valorData)
        
        return valorData;
    }
    const DepositTransaction = async (valor, code) => {
        let retorno = ""
        console.log("Valor de envio",valor)
        try{
            retorno = await contract.methods.deposit().send({
                from: currentAccount,
                value: Web3.utils.toWei(valor, "ether"),
            });
            console.log(retorno)

        } catch (error){
            console.log("Valor do retorno da funcao")
            console.log(error)
            console.log("Falha na tentativa de enviar")
            console.log("Valor de envio", valor)
        }
    }
    

    return {OpenTransaction, CheckTransaction, DepositTransaction}
}
export default Transaction;
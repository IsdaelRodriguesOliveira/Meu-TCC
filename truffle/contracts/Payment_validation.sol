// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Payment_validation{
    struct Usuarios{
        //numero de transacoes do usuario
        uint num_transacoes;
        //estado da transacao atual
        uint8 estado_transacao;
    }
    
    struct Usurario_espera{
        uint256 valor_esperado;
    }

    //rede das transacoes realizadas
    mapping(address => Usuarios) rede_tramsacoes;
    //rede das transacoes em espera
    mapping(address => Usurario_espera) rede_de_espera;

    //inicializa uma transacao de um usuario. Este usuario ficara em espera
    function abrir_transacao(address _endereco_atual, uint _valor_esperado) public returns(uint256){
        rede_de_espera[_endereco_atual].valor_esperado = _valor_esperado;
        return rede_de_espera[_endereco_atual].valor_esperado;
    }

    //recebe o valor do usuário.
    function deposit() external payable returns(string memory _resultado){
        _resultado = "entrei";
        //msg.value é o valor que está sendo passado, que deve ser igual ao valor esperado
        require(msg.value == rede_de_espera[msg.sender].valor_esperado, "Valor nao aceito");
        _resultado = "Passei aqui";
    }

    //pega o balanco do saldo atual do contrato em wei
    function balance() external view returns(uint256){
        return address(this).balance;
    }

    function registros_espera(address _endereco_atual)external view returns(uint256){
        uint256 resultado = rede_de_espera[_endereco_atual].valor_esperado;
        return resultado;
    }
}
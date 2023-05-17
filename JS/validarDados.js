function validator(nome, sobrenome, cpf, cnpj){
    if(nome.length < 3 || nome.length > 20){
        return 'Nome muito curto ou muito longo'
    }
    if(sobrenome.length < 3 || sobrenome.length > 20){
        return 'Sobrenome muito curto ou muito longo'
    }
    if(cpf.length < 11 || cpf.length > 11){
        return 'CPF invalido'
    }
    if(cnpj.length < 14 || cnpj.length > 14){
        return 'CNPJ invalido'
    }
    return true;
}
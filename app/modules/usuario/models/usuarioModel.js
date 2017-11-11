function UsuarioModel() {
    this.id = null;
    this.nome = null;
    this.sexo = null;
    this.cpf = null;
    this.rg = null;
    this.dataDeNascimento = null;
    this.telefone = null;
    this.celular = null;
    this.email = null;
    this.usuario = null;
    this.senha = null;
    this.confirmaSenha = null;
    this.endereco = {
        "cep": null,
        "logradouro": null,
        "numero": null,
        "bairro": null,
        "complemento": null,
        "estado": null,
        "cidade": null
    },
    this.status = null;
    this.perfilId = null;
    this.imagem = null;
}

UsuarioModel.prototype.fromService = function (data) {
    this.id = data.id;
    this.nome = data.nome;
    this.sexo = data.sexo;
    this.cpf = data.cpf;
    this.rg = data.rg;
    this.dataNascimento = data.dataNascimento;
    this.telefone = data.telefone;
    this.celular = data.celular;
    this.email = data.email;
    this.endereco = {
        "cep": data.endereco.cep,
        "logradouro": data.endereco.logradouro,
        "numero": data.endereco.numero,
        "bairro": data.endereco.bairro,
        "complemento": data.endereco.complemento,
        "estado": data.endereco.estado,
        "cidade": data.endereco.cidade
    },
    this.status = data.status;
    this.perfilId = data.perfilId;
};
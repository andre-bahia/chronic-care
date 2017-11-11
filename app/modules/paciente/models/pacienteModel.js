function PacienteModel(){
    this.id = null;
    this.nome = null;
    this.cpf = null;
}

PacienteModel.prototype.fromService = function(data){
    this.id = data.id;
    this.nome = data.nome;
    this.cpf = data.valor;
};
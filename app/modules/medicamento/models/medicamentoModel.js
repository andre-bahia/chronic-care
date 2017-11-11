function MedicamentoModel(){
    this.id = null;
    this.nome = null;
    this.quantidade = null
}

MedicamentoModel.prototype.fromService = function(data){
    this.id = data.id;
    this.nome = data.nome;
    this.quantidade = data.quantidade;
};
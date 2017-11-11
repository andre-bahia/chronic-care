function AcompanhamentoModel(){
    this.id = null;
    this.idPaciente = null;
    this.idRemedio = null;
    this.tipoAcompanhamento = null;
    this.periodo = null;
    this.glicoseAlta = null,
    this.glicoseBaixa = null,
    this.pressaoBaixaMinima = null,
    this.pressaoBaixaMaxima = null ,
    this.pressaoAltaMinima = null,
    this.pressaoAltaMaxima = null,
    this.apontamentos =  []
}

AcompanhamentoModel.prototype.fromService = function(data){
    this.id = data.id;
    this.idPaciente = data.idPaciente;
    this.idRemedio = data.idRemedio;
    this.tipoAcompanhamento = data.tipoAcompanhamento;
    this.periodo = data.periodo;
    this.glicoseAlta = data.glicoseAlta,
    this.glicoseBaixa = data.glicoseBaixa,
    this.pressaoBaixaMinima = data.pressaoBaixaMaxima,
    this.pressaoBaixaMaxima = data.pressaoBaixaMaxima,
    this.pressaoAltaMinima = data.pressaoAltaMinima,
    this.pressaoAltaMaxima = data.pressaoAltaMaxima,
    this.apontamentos =  data.apontamentos;
};
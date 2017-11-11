modalidade.factory('modalidadeService', modalidadeService);

function modalidadeService(uuid) {

  function getAll() {
    return this.modalidades;
  }

  function save(modalidade) {
    this.modalidades = this.modalidades.filter(auxiliar => auxiliar.id !== modalidade.id);
    this.modalidades.push(modalidade);
  }

  function remove(id) {
    this.modalidades = this.modalidades.filter(auxiliar => auxiliar.id !== id);
  }

  function getById(id) {
    var data = this.modalidades.filter(auxiliar => auxiliar.id === id)[0];
    return data;
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById,
    modalidades : [
      {
        id: 'd360be4a-69a1-40ee-9c48-f500af8408c2', 
        nome:'Musculação', 
        valor: 50.00, 
        status: true
      },
      {
        id: 'd360be4a-69a2-40ee-9c48-f500af8408c2', 
        nome:'Natação', 
        valor:65.00, 
        status: false
      }
    ]
  };

}

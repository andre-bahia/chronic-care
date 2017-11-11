medicamento.factory("medicamentoService", medicamentoService);

function medicamentoService(uuid, Middleware, $http) {
  const service = {
      url: Middleware.getUrl('remedio')
  };

  function getAll() {
      return $http.get(service.url).then(function (response) {
          return response.data;
      });
  }

  function save(medicamento){
      var methodHttp;
      if (medicamento.id){
          methodHttp = $http.put(service.url, medicamento);
      } else {
          methodHttp  = $http.post(service.url, medicamento);
      }
      return methodHttp.then(function (response) {
        return response.data;
      });
  }

  function remove(id) {
    return $http.delete(service.url+'/'+id).then(function (response) {
        return response.data;
    });
  }

  function getById(id) {
      return $http.get(service.url+'/'+id).then(function (response) {
          var mapper = new medicamentoModel();
          mapper.fromService(response.data);
          return mapper;
      });
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById
  };

}



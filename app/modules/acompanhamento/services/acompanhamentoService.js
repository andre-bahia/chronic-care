acompanhamento.factory('acompanhamentoService', acompanhamentoService);

function acompanhamentoService(uuid, Middleware, $http) {
  const service = {
      url: Middleware.getUrl('acompanhamento')
  };

  function getAll() {
      return $http.get(service.url).then(function (response) {
          return response.data;
      });
  }

  function save(acompanhamento){
      var methodHttp;
      if (acompanhamento.id){
          methodHttp = $http.put(service.url, acompanhamento);
      } else {
          methodHttp  = $http.post(service.url, acompanhamento);
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
          var mapper = new acompanhamentoModel();
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



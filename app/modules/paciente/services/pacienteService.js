paciente.factory('pacienteService', pacienteService);

function pacienteService(uuid, Middleware, $http) {
  const service = {
      url: Middleware.getUrl('paciente')
  };

  function getAll() {
      return $http.get(service.url).then(function (response) {
          return response.data;
      });
  }

  function save(paciente){
      var methodHttp;
      if (paciente.id){
          methodHttp = $http.put(service.url, paciente);
      } else {
          methodHttp  = $http.post(service.url, paciente);
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
          var mapper = new pacienteModel();
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



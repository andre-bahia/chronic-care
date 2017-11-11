usuario.controller("usuarioControllerEdit", usuarioControllerEdit);

function usuarioControllerEdit($scope, $stateParams, $state, usuarioService, perfilService, toaster) {
  $scope.usuario = usuarioService.getById($stateParams.id);
  console.log($scope.usuario);
  $scope.titlePage = "Editar usuario";

    function save(usuario) {
      usuarioService.save(usuario);
      toaster.success({title: "", body:"Editado com sucesso!"});
      $state.go('usuario-list');
    }

    function getCEP(cep) {
        if ($scope.usuario.endereco.cep != undefined && $scope.usuario.endereco.cep != '' && $scope.usuario.endereco.cep.length === 9) {
            viaCEP.get(cep).then(function (response) {
                $scope.usuario.endereco.cep = response.cep;
                $scope.usuario.endereco.logradouro = response.logradouro;
                $scope.usuario.endereco.bairro = response.bairro;
                $scope.usuario.endereco.cidade = response.localidade;
                $scope.usuario.endereco.estado = response.uf;
            });
        } else {
            return false;
        }
    }

    function getProfiles() {
        var promise = perfilService.getAll();
        promise.then(onLoadProfiles);
        promise.catch(onLoadError);
    }

    function onLoadProfiles(response) {
        console.log(response);
        $scope.profiles = response;
    }

    function onLoadError(error) {
        console.log(error);
    }

    $scope.save = save;
    $scope.profiles = [];
    $scope.titlePage = "Editar usuário";
    getProfiles();
}
usuario.controller("usuarioControllerCreate", usuarioControllerCreate);

function usuarioControllerCreate($scope, usuarioService, $state, uuid, perfilService, viaCEP, toaster) {
    
    function save(usuario){
        usuario.id = uuid.v4();
        var promise = usuarioService.save(usuario);
        toaster.success({title: "", body:"Cadastrado com sucesso!"});
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
        $scope.profiles = response;
    }

    function onLoadError(error) {
        console.log(error);
    }


    $scope.save = save;
    $scope.getCEP = getCEP;
    $scope.usuario = new UsuarioModel();
    $scope.titlePage = "Cadastrar usuario";
    $scope.profiles = [];
    getProfiles();
}
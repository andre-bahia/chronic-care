acompanhamento.controller("acompanhamentoControllerCreate", acompanhamentoControllerCreate);

function acompanhamentoControllerCreate($scope, 
                                        acompanhamentoService, 
                                        $state, 
                                        uuid, 
                                        toaster, 
                                        pacienteService,
                                        medicamentoService) {
    
    function save(acompanhamento)
    {
        var promise = acompanhamentoService.save(acompanhamento);
        promise.then(onLoadSuccess);
        promise.catch(onLoadError);
    }

    function onLoadSuccess()
    {
        $state.go('acompanhamento-list');
        toaster.success({title: "", body:"Cadastrado com sucesso!"});
    }

    function onLoadError(data)
    {
        var  error = data.data.errors;
        $state.go('acompanhamento-list');
        toaster.error({title: "", body: error });
    }

    function getPacientes() {
        var promise = pacienteService.getAll();
        promise.then(function(data) {
            $scope.pacientes = data;
        });
    }

    function getRemedios() {
        var promise = medicamentoService.getAll();
        promise.then(function(data) {
            $scope.remedios = data;
        });
    }

    $scope.save = save;
    $scope.pacientes = [];
    $scope.acompanhamento = new AcompanhamentoModel();
    $scope.titlePage = "Cadastrar acompanhamento";

}
acompanhamento.controller("acompanhamentoControllerCreate", acompanhamentoControllerCreate);

function acompanhamentoControllerCreate($scope, 
                                        acompanhamentoService, 
                                        $state, 
                                        uuid, 
                                        toaster, 
                                        pacienteService,
                                        medicamentoService) {
                                            
                                            $scope.pacienteSelecionado;
                                            $scope.remedioSelecionado;    
                                            getPacientes();
                                            getRemedios();


    
    function save(acompanhamento)
    {
        acompanhamento.idPaciente = $scope.pacienteSelecionado.id;
        acompanhamento.idRemedio = $scope.remedioSelecionado.id;    

        console.log(acompanhamento);
        
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

    $scope.showDiv = function(nameDiv) {
        console.log(nameDiv);
        if(nameDiv === '2' ) {
            $scope.pressaoArterial = true;
            $scope.glicemia = false;
            
        } else {
            $scope.pressaoArterial = false;            
            $scope.glicemia = true;
        }
    }

    $scope.save = save;
    $scope.pacientes = [];
    $scope.remedios = [];    
    $scope.pressaoArterial = false;
    $scope.glicemia = false;
    $scope.acompanhamento = new AcompanhamentoModel();
    $scope.titlePage = "Cadastrar acompanhamento";

}
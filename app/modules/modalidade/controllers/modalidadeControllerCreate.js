modalidade.controller("modalidadeControllerCreate", modalidadeControllerCreate);

function modalidadeControllerCreate($scope, modalidadeService, $state, uuid, toaster) {
    
    function save(modalidade){
        modalidade.id = uuid.v4();
        var promise = modalidadeService.save(modalidade);
        toaster.success({title: "", body:"Cadastrado com sucesso!"});
        $state.go('modalidade-list');
    }

    $scope.save = save;
    $scope.modalidade = new ModalidadeModel();
    $scope.titlePage = "Cadastrar modalidade";

}
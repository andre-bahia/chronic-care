modalidade.controller("modalidadeControllerEdit", modalidadeControllerEdit);

function modalidadeControllerEdit($scope, $stateParams, $state, modalidadeService) {
  $scope.modalidade = modalidadeService.getById($stateParams.id);
  $scope.titlePage = "Editar modalidade";

  function save(modalidade) {
    modalidadeService.save(modalidade);
    $state.go('modalidade-list');
  }

  $scope.save = save;
}
medicamento.controller("medicamentoControllerList", medicamentoControllerList);

function medicamentoControllerList($scope, medicamentoService, toaster, SweetAlert) {
    $scope.medicamentos = [];

    function getAll() {
        var promise = medicamentoService.getAll();
        promise.then(onLoadSuccess);
        promise.catch(onLoadError);
    }

    function confirmRemove(id){
      SweetAlert.swal({
         title: "Deseja excluir esse registro?",
         text: "",
         type: "warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",confirmButtonText: "Ok!",
         cancelButtonText: "Cancelar!",
         closeOnConfirm: false,
         closeOnCancel: false },
      function(isConfirm){
         if (isConfirm) {
            medicamentoService.remove(id);
            getAll();
            SweetAlert.swal("Deletado!", "Seu registro foi deletado com sucesso", "success");
         } else {
            SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
         }
      });
    }

    function onLoadSuccess(data){
        $scope.medicamentos = data;
    }

    function onLoadError(data){

    }

    getAll();
    $scope.confirmRemove = confirmRemove;
}

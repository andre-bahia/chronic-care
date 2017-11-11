acompanhamento.controller("acompanhamentoControllerList", acompanhamentoControllerList);

function acompanhamentoControllerList($scope, acompanhamentoService, toaster, SweetAlert) {
    $scope.acompanhamentos = [];

    function getAll() {
        var promise = acompanhamentoService.getAll();
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
            acompanhamentoService.remove(id);
            getAll();
            SweetAlert.swal("Deletado!", "Seu registro foi deletado com sucesso", "success");
         } else {
            SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
         }
      });
    }

    function onLoadSuccess(data){
        $scope.acompanhamentos = data;
    }

    function onLoadError(data){

    }

    getAll();
    $scope.confirmRemove = confirmRemove;
}

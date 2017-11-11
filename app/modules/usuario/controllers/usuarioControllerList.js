usuario.controller("usuarioControllerList", usuarioControllerList);

function usuarioControllerList($scope, usuarioService, $mdDialog, toaster , SweetAlert) {
    $scope.usuarios = [];
    $scope.status = '';

    function getAll() {
        $scope.usuarios = usuarioService.getAll();
        //promise.then(onLoadSuccess);
        //promise.catch(onLoadError);
    }

    function remove(id){
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
            usuarioService.remove(id);
            getAll();
            SweetAlert.swal("Deletado!", "Seu registro foi deletado com sucesso", "success");
         } else {
            SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
         }
      });
    }

    function onLoadSuccess(data){
        $scope.usuarioes = data;
    }

    function onLoadError(data){
    }

    getAll();
    $scope.remove = remove;
}

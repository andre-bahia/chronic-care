medicamento.config(configRoutes);

function configRoutes($stateProvider) {
    var medicamentoCreate = {
        name: 'medicamento-create',
        url: '/medicamento/create',
        authenticate: true,
        controller: 'medicamentoControllerCreate',
        templateUrl: 'app/modules/medicamento/views/medicamentoForm.html'
    };
    var medicamentoList = {
        name: 'medicamento-list',
        url: '/medicamento/list',
        authenticate: true,
        controller: 'medicamentoControllerList',
        templateUrl: 'app/modules/medicamento/views/medicamentoList.html'
    };
    var medicamentoEdit = {
        name: 'medicamento-edit',
        url: '/medicamento/:id/edit',
        authenticate: true,
        controller: 'medicamentoControllerEdit',
        templateUrl: 'app/modules/medicamento/views/medicamentoForm.html'
    };

    $stateProvider.state(medicamentoCreate);
    $stateProvider.state(medicamentoList);
    $stateProvider.state(medicamentoEdit);
}
acompanhamento.config(configRoutes);

function configRoutes($stateProvider) {
    var acompanhamentoCreate = {
        name: 'acompanhamento-create',
        url: '/acompanhamento/create',
        authenticate: true,
        controller: 'acompanhamentoControllerCreate',
        templateUrl: 'app/modules/acompanhamento/views/acompanhamentoForm.html'
    };
    var acompanhamentoList = {
        name: 'acompanhamento-list',
        url: '/acompanhamento/list',
        authenticate: true,
        controller: 'acompanhamentoControllerList',
        templateUrl: 'app/modules/acompanhamento/views/acompanhamentoList.html'
    };
    var acompanhamentoEdit = {
        name: 'acompanhamento-edit',
        url: '/acompanhamento/:id/edit',
        authenticate: true,
        controller: 'acompanhamentoControllerEdit',
        templateUrl: 'app/modules/acompanhamento/views/acompanhamentoForm.html'
    };

    $stateProvider.state(acompanhamentoCreate);
    $stateProvider.state(acompanhamentoList);
    $stateProvider.state(acompanhamentoEdit);
}
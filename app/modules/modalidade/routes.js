modalidade.config(configRoutes);

function configRoutes($stateProvider) {
    var modalidadeCreate = {
        name: 'modalidade-create',
        url: '/modalidade/create',
        authenticate: true,
        controller: 'modalidadeControllerCreate',
        templateUrl: 'app/modules/modalidade/views/modalidadeForm.html'
    };
    var modalidadeList = {
        name: 'modalidade-list',
        url: '/modalidade/list',
        authenticate: true,
        controller: 'modalidadeControllerList',
        templateUrl: 'app/modules/modalidade/views/modalidadeList.html'
    };
    var modalidadeEdit = {
        name: 'modalidade-edit',
        url: '/modalidade/:id/edit',
        authenticate: true,
        controller: 'modalidadeControllerEdit',
        templateUrl: 'app/modules/modalidade/views/modalidadeForm.html'
    };

    $stateProvider.state(modalidadeCreate);
    $stateProvider.state(modalidadeList);
    $stateProvider.state(modalidadeEdit);
}
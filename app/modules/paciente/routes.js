paciente.config(configRoutes);

function configRoutes($stateProvider) {
    var pacienteCreate = {
        name: 'paciente-create',
        url: '/paciente/create',
        authenticate: true,
        controller: 'pacienteControllerCreate',
        templateUrl: 'app/modules/paciente/views/pacienteForm.html'
    };
    var pacienteList = {
        name: 'paciente-list',
        url: '/paciente/list',
        authenticate: true,
        controller: 'pacienteControllerList',
        templateUrl: 'app/modules/paciente/views/pacienteList.html'
    };
    var pacienteEdit = {
        name: 'paciente-edit',
        url: '/paciente/:id/edit',
        authenticate: true,
        controller: 'pacienteControllerEdit',
        templateUrl: 'app/modules/paciente/views/pacienteForm.html'
    };

    $stateProvider.state(pacienteCreate);
    $stateProvider.state(pacienteList);
    $stateProvider.state(pacienteEdit);
}
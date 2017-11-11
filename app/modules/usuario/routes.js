usuario.config(configRoutes);

function configRoutes($stateProvider) {
    var usuarioCreate = {
        name : 'usuario-create',
        url : '/usuario/create',
        authenticate: true,
        controller: 'usuarioControllerCreate',
        templateUrl: 'app/modules/usuario/views/usuarioForm.html'
    };
    
    var usuarioList = {
        name: 'usuario-list',
        url: '/usuario/list',
        authenticate: true,
        controller: 'usuarioControllerList',
        templateUrl: 'app/modules/usuario/views/usuarioList.html'
    };

    var usuarioEdit = {
        name: 'usuario-edit',
        url: '/usuario/:id/edit',
        authenticate: true,
        controller: 'usuarioControllerEdit',
        templateUrl: 'app/modules/usuario/views/usuarioForm.html'
    };

    $stateProvider.state(usuarioCreate);
    $stateProvider.state(usuarioList);
    $stateProvider.state(usuarioEdit);
}
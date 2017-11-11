login.config(configRoutes);

function configRoutes($stateProvider){
    var login = {
        name: 'login',
        url: '/login',
        controller: 'loginController',
        templateUrl: 'app/modules/login/views/login.html',
        authenticate : false
    };

    $stateProvider.state(login);
}
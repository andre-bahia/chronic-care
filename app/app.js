var app = angular.module('app', [
    'ngCookies',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngMaterial',
    'oitozero.ngSweetAlert',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'oc.lazyLoad',
    'nouislider',
    'angular-uuid',
    'ngMaterialDatePicker',
    'angular.viacep',
    'toaster',
    'login',
    'base',
    'usuario',
    'localytics.directives',
    'paciente',
    'medicamento',
    'acompanhamento'
]);

app.config(function ($locationProvider) {
    $locationProvider.hashPrefix('');
});

app.run(function ($rootScope, $state, userAuthenticateService, $templateCache) {
    $rootScope.$on("$stateChangeStart", function(event, toState){
        if (toState.authenticate && !userAuthenticateService.state.logged){
            // Usuário não está autenticado
            $state.transitionTo("login");
            event.preventDefault();
        }

        if(toState.name === 'login' && userAuthenticateService.state.logged){
            $state.transitionTo("home");
            event.preventDefault();
        }
    });
});

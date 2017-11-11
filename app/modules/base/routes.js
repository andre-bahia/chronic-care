base.config(configRoutes);

function configRoutes($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
        
            //------------------------------
            // HOME
            //------------------------------

            .state ('index', {
                url: '/',
                templateUrl: 'app/modules/base/views/home.html',
                authenticate: true
            }).state ('home', {
                url: '/home',
                templateUrl: 'app/modules/base/views/home.html',
                authenticate: true,
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load ([])
                    }
                }
            })
}
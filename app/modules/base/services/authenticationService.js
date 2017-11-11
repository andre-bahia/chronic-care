base.factory("authenticationService", authenticationService);

function authenticationService($http) {
    function login(user) {
        var params = user;
        return $http.get('data/user.json').then(function (data) {
            if(data.data.usuario == params.usuario && data.data.senha == params.senha){
                return data.data;
            }else{
                return false;
            }
        });
        // return $http.post('', params, {skipUnauthorizedInterceptorHandler: true}).then(function (data) {
        //     return data.data.data;
        // });
    }

    function logout() {
        return $http.post('', null, {skipUnauthorizedInterceptorHandler: true}).then(function (data) {
            return data;
        });
    }

    return {
        login: login,
        logout: logout
    };
}
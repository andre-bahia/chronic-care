/**
 * Created by andre-luis on 28/05/2017.
 */
base.factory("perfilService", perfilService);

function perfilService($http) {

    function getAll() {
        return $http.get('/data/papeis.json').then(function (response) {
           return response.data;
        });
    }

    return {
        getAll: getAll
    };
}
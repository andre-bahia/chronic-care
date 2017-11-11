login.controller("loginController", loginController);

function loginController($scope, $http, userAuthenticateService, $state) {
    function onAuthenticationSuccess() {
        $state.go("home");
    }

    function onAuthenticationFailure() {
        $scope.authenticating = false;
    }

    function authenticate(form) {
        $scope.authenticating = true;

        form.$setSubmitted();

        if (form.$invalid) {
            $scope.authenticating = false;
            return;
        }

        var promise = userAuthenticateService.login($scope.usuario);

        promise.then(onAuthenticationSuccess);
        promise.catch(onAuthenticationFailure);
    }

    $scope.onKeyPress = function (event, form) {
        if (event.keyCode == 13) authenticate(form);
    };

    $scope.usuario = {};
    $scope.authenticating = false;
    $scope.authenticate = authenticate;
    $scope.login = 1;
    $scope.register = 0;
    $scope.forgot = 0;
}
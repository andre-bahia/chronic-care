base.factory("userAuthenticateService", userAuthenticateService);

function userAuthenticateService(authenticationService, cookieService, toaster) {

    var COOKIE_USER_KEY = "user";

    var user = null;

    var state = {logged: false, username: null, menu: {value: null}, avatar : null};

    var menu = [];

    function getPermission(module, action) {
        if (!user
            || !user.permissions
            || !user.permissions.hasOwnProperty(module)
            || !user.permissions[module].hasOwnProperty(action)) return false;

        return user.permissions[module][action];
    }

    function getPermissions() {
        if (user) {
            return user.permissions;
        }
        return null;
    }

    function getUserMenu() {
        if (user) {
            return user.menu;
        }
        return null;
    }

    function getUser() {
        user = cookieService.getValue(COOKIE_USER_KEY);
        if (user) {
            state.logged = true;
            state.username = user.nome;
            // state.menu.value = $localStorage.menu;
            state.avatar = user.imagem;
        }
        return user;
    }

    function isLogged() {
        return this.getUser() != null;
    }

    function login(params) {
        return authenticationService.login(params).then(function (data) {
            // menu = data.menu;
            // data.menu = [];
            if (data) {
                user = data;
                cookieService.setValue(COOKIE_USER_KEY, data);
                //$localStorage.menu = menu;
                getUser();
                return true;
            } else {
                toaster.error({title: "", body:"Usuário ou senha inválidos"});
            }
        });
    }

    function logout() {
        destroyUserData();
        return true;
    }

    function destroyUserData() {
        user = null;
        state.logged = false;
        state.username = null;
        cookieService.clear();
       // $localStorage.$reset();
    }

    function getState() {
        return state;
    }

    getUser();

    return {
        hasPermission: getPermission,
        getPermissions: getPermissions,
        getState: getState,
        getUserMenu: getUserMenu,
        getUser: getUser,
        isLogged: isLogged,
        login: login,
        logout: logout,
        destroyUserData: destroyUserData,
        state: state
    }
}
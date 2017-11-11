base.controller("mainController", mainController);

function mainController($timeout, $state, $scope, growlService, userAuthenticateService, $stateParams) {

    $scope.userState = userAuthenticateService.getState();

    //Options toaster
    $scope.options = {
        'close-button': true,
        'time-out':{ 'toast-success': 4000, 'toast-error': 4000, 'toast-pop': 4000 },
        'position-class': 'toast-bottom-right',
        'progress-bar': true
    };

    //Welcome Message
    if ($scope.userState.logged){
        growlService.growl('Bem Vindo pae!', 'inverse');
    }



    // Detact Mobile Browser
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        angular.element('html').addClass('ismobile');
    }

    // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
    this.sidebarToggle = {
        left: false,
        right: false
    };

    // By default template has a boxed layout
    this.layoutType = 0;
    // this.layoutType = localStorage.getItem('ma-layout-status');

    // For Mainmenu Active Class
    this.$state = $state;

    //Close sidebar on click
    this.sidebarStat = function (event) {
        if (!angular.element(event.target).parent().hasClass('active')) {
            this.sidebarToggle.left = false;
        }
    }

    //Listview Search (Check listview pages)
    this.listviewSearchStat = false;

    this.lvSearch = function () {
        this.listviewSearchStat = true;
    }

    //Listview menu toggle in small screens
    this.lvMenuStat = false;

    //Blog
    this.wallCommenting = [];

    this.wallImage = false;
    this.wallVideo = false;
    this.wallLink = false;

    //Skin Switch
    this.currentSkin = 'teal';

    this.skinList = [
        'lightblue',
        'bluegray',
        'cyan',
        'teal',
        'green',
        'orange',
        'blue',
        'purple'
    ]

    this.skinSwitch = function (color) {
        this.currentSkin = color;
    }

    $scope.logout = function () {
        this.layoutType = 0;
        var promise = userAuthenticateService.logout();
        $state.transitionTo("login");
        
    }
}

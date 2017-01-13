(function() {
    angular
        .module("adminManagerMain")
        .controller("ProfileController", ProfileController);

    function ProfileController() {
        var vm = this;
        vm.data="User profile page";
    }

}());
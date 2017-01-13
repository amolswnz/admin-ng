(function() {

    angular
        .module("adminManagerMain")
        .controller("MenuController", ['profileService', "$window", MenuController]);

    function MenuController(profileService, $window) {
        var vm = this;
        profileService.getSession().then(function(response) {
            vm.user = response; 
        });
        
        vm.logout = function() {
            profileService.logoutProfile().then(function(response) {
                toastr.options.newestOnTop = false;
                var redirectPath = 
                        $window.location.origin
                        + $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/"))
                        + "/index.html";
                toastr.success(response.success, "Success");
                toastr.info("You will be redirected in 5 seconds.", response.success, { onHidden: function() {  $window.location.href = redirectPath; }});
            });
        }
    }
}());
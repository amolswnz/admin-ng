(function() {
    angular.module("adminManager")
            .controller("LoginController", ['$http', '$window', 'loginService', LoginController] );

    function LoginController($http, $window, loginService) {
        var vm = this;
        vm.login = function() {
            loginService.loginUser(vm.loginData).then(function(response) {
                if(response.error) {
                    toastr.error(response.error, "Login Error");
                } else if(response.deleted) {
                    toastr.error(response.deleted, "Deleted Account");
                } else if(response.inactive) {
                    toastr.info(response.inactive, "Inactive Account");
                } else if(response.active) {
                    var redirectPath = 
                            $window.location.origin
                            + $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/"))
                            + "/dashboard.html";
                    $window.location.href = redirectPath;
                }
            });        
        }

        vm.forgot = function() {
            loginService.forgotPassword(vm.loginData).then(function(response) {
                if(response.error) {
                    toastr.error(response.error, "ERROR");
                } else {
                    toastr.success("You will be redirected to login page in 5 seconds.", response.success, { onHidden: function() {  $window.path('/login');     $scope.$apply(); }});
                }
            });
        }
    }

})();
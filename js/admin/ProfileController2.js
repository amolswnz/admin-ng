(function() {
    angular
        .module("adminManagerMain")
        .controller("ProfileController", ['profileService', '$window', '$uibModal', ProfileController]);

    function ProfileController(profileService, $window, $uibModal) {
        var vm = this;

        profileService.getProfile().then(function(response) {
            vm.user = response;
        });

        vm.updateProfile = function() {
            console.log(vm.securityPwd);
            return false;
            profileService.updateProfile(vm.user).then(function(response) {
                toastr.options = {
                            "preventDuplicates": true,
                            "preventOpenDuplicates": true,
                            "newestOnTop": false
                        };
                if(response.success) {
                    toastr.success(response.success, "Success");
                } else if(response.erro) {
                    toastr.error(response.error, "Critical Error");
                    var redirectPath = 
                            $window.location.origin
                            + $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/"))
                            + "/index.html";
                    toastr.info("You will be redirected to login page in 5 seconds.", "Information", { onHidden: function() { $window.location.href = redirectPath; }});
                }
                else {
                    toastr.error(response.critical, "Critical");
                }
                toastr.info("You will be redirected in 5 seconds.", "Information", { onHidden: function() {  $window.history.back(); }});
            });
        }

        vm.checkPwd = function() {
            vm.modal = $uibModal.open({
                            templateUrl: 'templates/profile/pwdModal.html',
                            controller: 'ProfileController',
                            controllerAs: 'profileCtrl',
                            size: 'md',
                               bindToController: true

                        });
        }

        vm.updateCancel = function() {
            console.log("test");
            $uibModal.dismiss('cancel');
        }
    }
}());
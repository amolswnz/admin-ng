(function() {
    angular
        .module("adminManagerMain")
        .controller("ProfileController", ['profileService', '$window', '$uibModal', '$scope', ProfileController]);

    function ProfileController(profileService, $window, $uibModal, $scope) {
        var vm = this;

        profileService.getProfile().then(function(response) {
            vm.user = response;
        });

        vm.updateProfile = function() {
            console.log(vm.securityPwd);
            profileService.updateProfile(vm.user, vm.securityPwd).then(function(response) {
                toastr.options = {
                    "preventDuplicates": true,
                    "preventOpenDuplicates": true,
                    "newestOnTop": false
                };
                if (response.success) {
                    toastr.success(response.success, "Success");
                } else if (response.error) {
                    toastr.error(response.error, "Critical Error");
                    var redirectPath =
                        $window.location.origin +
                        $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/")) +
                        "/index.html";
                    toastr.info("You will be redirected to login page in 5 seconds.", "Information", {
                        onHidden: function() {
                            $window.location.href = redirectPath;
                        }
                    });
                } else if (reponse.pwdError) {
                    toastr.danger(response.pwdError, "Password Error !");
                } else {
                    toastr.error(response.critical, "Critical");
                }
                toastr.info("You will be redirected in 5 seconds.", "Information", {
                    onHidden: function() {
                        $window.history.back();
                    }
                });
            });
        }


        /* Modal Window */
        $scope.modalPopup = function() {
            modal = $uibModal.open({
                                    templateUrl: 'templates/profile/pwdModal.html',
                                    size: 'md',
                                    scope: $scope
            });
            $scope.modalInstance = modal;
            return modal.result
        };


        vm.checkPwd = function() {
            $scope.modalPopup();

                .then(function(data) { $scope.handleSuccess(data);
                })
                .then(null, function(reason) {
                    $scope.handleDismiss(reason);
                });
        };

        $scope.yes = function() {
            $scope.modalInstance.close('Yes Button Clicked')
        };

        $scope.no = function() {
            $scope.modalInstance.dismiss('No Button Clicked')
        };

        $scope.handleSuccess = function(data) {
            console.info('Modal closed: ' + data);
        };

        $scope.handleDismiss = function(reason) {
            console.info('Modal dismissed: ' + reason);
        }




    }
}());
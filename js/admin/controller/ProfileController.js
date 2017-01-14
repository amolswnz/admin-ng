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
                    toastr.info("You will be redirected in 5 seconds.", "Information", {
                        onHidden: function() {
                            $window.history.back();
                        }
                    });
                } else if (response.error) {
                    toastr.error(response.error, "Unauthorised Access");
                    var redirectPath =
                        $window.location.origin +
                        $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/")) +
                        "/index.html";
                    toastr.info("You will be redirected to login page in 5 seconds.", "Information", {
                        onHidden: function() {
                            $window.location.href = redirectPath;
                        }
                    });
                } else if (response.pwdError) {
                    toastr.warning(response.pwdError, "Password Error !");
                } else {
                    toastr.error(response.critical, "Critical");
                }
            });
        }

        /* Modal Window - modal window always needs to be in $scope */
        $scope.modalPopup = function() {
            modal = $uibModal.open({
                                    templateUrl: 'templates/profile/pwdModal.html',
                                    size: 'md',
                                    scope: $scope
            });
            $scope.modalInstance = modal;
            return modal.result
        };

        /* Function which triggers modal window opening */
        vm.checkPwd = function() {
            $scope.modalPopup()
                .then(function(data) { $scope.handleSuccess(data); })
                .then(null, function(reason) {  $scope.handleDismiss(reason); });
        };

        /* Submit button is cliked on modal window - modal action perform */
        $scope.updateProfile = function() {
            $scope.modalInstance.close('Update profile clicked')
        };

        /* Cancel button is cliked or backdrop is clicked on modal window - modal dismissed */
        $scope.updateCancel = function() {
            $scope.modalInstance.dismiss('Cancel update Clicked')
        };

        /* Monitors the modal window close event - After closing the modal the required actions can be carried out */
        $scope.handleSuccess = function(data) {
            console.log('Modal closed: ' + data);
            vm.updateProfile();
        };

        /* Monitors the dismissal of modal window - After dismissing the modal */
        $scope.handleDismiss = function(reason) {
            console.log('Modal dismissed: ' + reason);
        }
    }
}());
(function() {
    angular
        .module("adminManagerMain")
        .controller("UserController", ["userService", "$window", "$routeParams", UserController]);

    function UserController(userService, $window, $routeParams) {
        var vm = this;
        userService.getUsers().then(function(response) {
            checkAuthAccess(response);
            vm.users = response;
        });

        userService.getUser($routeParams.id).then(function(response) {
            checkAuthAccess(response);
            vm.user = response;
        });

        vm.deleteUser = function(id) {
            userService.deleteUser(id).then(function(response) {
                checkAuthAccess(response);
                toastr.options = {
                            "preventDuplicates": true,
                            "preventOpenDuplicates": true,
                            "newestOnTop": false
                        };
                if(response.success) {
                    toastr.success(response.success, "Success");
                }
                else {
                    toastr.error(response.critical, "Critical");
                }
                toastr.info("You will be redirected in 5 seconds.", "Information", { onHidden: function() {  $window.history.back(); }});
            });
        }

        /* Get roles and statues from database */
        userService.getOptions().then(function(response) {
            vm.roles = response.roles;
            vm.statuss = response.statuss;
        });

        vm.updateForm = function() {
            userService.updateUser(vm.user).then(function(response) {
                checkAuthAccess(response);
                toastr.options = {
                            "preventDuplicates": true,
                            "preventOpenDuplicates": true,
                            "newestOnTop": false
                        };
                if(response.success) {
                    toastr.success(response.success, "Success");
                }
                else {
                    toastr.error(response.critical, "Critical");
                }
                toastr.info("You will be redirected in 5 seconds.", "Information", { onHidden: function() {  $window.history.back(); }});
            });
        }

        vm.addForm = function() {
            userService.addUser(vm.user).then(function(response) {
                checkAuthAccess(response);
                toastr.options = {
                            "preventDuplicates": true,
                            "preventOpenDuplicates": true,
                            "newestOnTop": false
                        };
                if(response.success) {
                    toastr.success(response.success, "Success");
                }
                else {
                    toastr.error(response.critical, "Critical");
                }
                toastr.info("You will be redirected in 5 seconds.", "Information", { onHidden: function() {  $window.history.back(); }});
            });
        }
        
        /* Helper function to clear search query input string */
        vm.clearSearch = function() {
            vm.searchText = "";
        }

        /* "SuperAdmin","Admin","Manager","Staff","General" */
        vm.roleClass = function(role) {
            switch(role) {
                case 'SuperAdmin':
                    return 'label label-warning';
                case 'Admin':
                    return 'label label-default';
                case 'Manager':
                    return 'label label-danger';
                case 'Staff':
                    return 'label label-success';
                case 'General':
                    return 'label label-default';
            }
        }

        /* "Active","Inactive","Deleted" */
        vm.statusClass = function(status) {
            switch(status) {
                case 'Active':
                    return 'success';
                case 'Inactive':
                    return 'warning';
                case 'Deleted':
                    return 'danger';
            }
        }

        /* Check for authenticity of user - logged not logged in */
        var checkAuthAccess = function(response) {
            if(response.error) {
                toastr.options = {
                            "preventDuplicates": true,
                            "preventOpenDuplicates": true,
                            "newestOnTop": false
                        };
                toastr.error(response.error, "Critical Error");
                var redirectPath = 
                        $window.location.origin
                        + $window.location.pathname.substring(0, $window.location.pathname.lastIndexOf("/"))
                        + "/index.html";
                toastr.info("You will be redirected to login page in 5 seconds.", "Information", { onHidden: function() { $window.location.href = redirectPath; }});
                return ;
            }
        }
    }
}());
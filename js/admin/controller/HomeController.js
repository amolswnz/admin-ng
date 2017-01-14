(function() {
    angular
        .module("adminManagerMain")
        .controller("HomeController", ["homeService", HomeController]);

    function HomeController(homeService) {
        var vm = this;

        homeService.getStatistics().then(function(response) {
            if(response.error) {
                vm.error = response.error;
            } else {
                var data = response.success;
                vm.newUsers = data.newUsers.total;
                vm.totalUsers = data.totalUsers.total;
                vm.role = data.role;
                vm.status = data.status;                
            }
        });
    }

}());
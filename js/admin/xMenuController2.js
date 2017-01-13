(function() {

    angular
        .module("adminManagerMain")
        .service('sessionService', GetSession)
        .controller("MenuController", ['sessionService', MenuController])
        
        ;

    function GetSession($http) {
        var baseUrl = "api/admin/profile/";

        var getSession = function() {
            return $http({
                        method: 'GET',
                        url: baseUrl + 'getSession.php'
                    }).then(successFn, errorFn);
        };

        var successFn = function(response) {
            return response.data;
        }
        var errorFn = function(error) {
            console.warn("Error in GET or POST",error);
            return error.data;
        }

        return {
            getSession: getSession, 
        };        
    }


    function MenuController(sessionService) {
        var vm = this;
        sessionService.getSession().then(function(response) {
            vm.user = response; 
        });

        
    }   

}());
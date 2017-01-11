app.run(function($rootScope) {
        /* Adding new class to row depending on status */
        $rootScope.rowClass = function(schedule) {
            if (schedule.status === 'Booked')
                return 'warning';
            if (schedule.status === 'Cancelled')
                return 'strikeout';
            if (schedule.status === 'Pending')
                return 'danger';
            if (schedule.status === 'Withheld')
                return 'success';
        }

        /* Required for pagination directive */
        $rootScope.currentPage = 1;
        $rootScope.pageSize = 10;

        $rootScope.sortOrder = "pickUpDateTime";

        /* Clears the filter query input field */
        $rootScope.clearSearch = function() {
            $rootScope.q = "";
        }

        $rootScope.labelClass = function(status) {
            if (status === 'Booked')
                return 'label label-warning';
            if (status === 'Cancelled')
                return 'label label-default';
            if (status === 'Pending')
                return 'label label-danger';
            if (status === 'Withheld')
                return 'label label-success';
        }              
    });
(function() {
    var app = angular.module("adminManagerMain");

    /* Custom filter to change the MySQL date string to JavaScript Date String -> required for sorting */ 
    app.filter('dateToISO', function() {
        return function(input) {
            // Bug fix for undefined input 
            if(input === undefined) {
                return true;
            }
            else {
                return new Date(input).toISOString();
            }
        };
    });

    /* Generate series of number from to */
    app.filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++) {
                input.push(i);
            }
            return input;
        };
    });

    /*  To remove the following error
        Error: [filter:notarray] This might be related to a breaking change in angular 1.5 
        Answered here -> http://stackoverflow.com/questions/36448826/error-orderby-when-updating-to-angular-1-5-3
    */ 
    app.filter('toArray', function() {
        return function(obj, addKey) {
            if (!angular.isObject(obj)) return obj;
            if (addKey === false) {
                return Object.keys(obj).map(function(key) {
                    return obj[key];
                });
            } else {
                return Object.keys(obj).map(function(key) {
                    var value = obj[key];
                    return angular.isObject(value) ?
                        Object.defineProperty(value, '$key', {
                            enumerable: false,
                            value: key
                        }) : {
                            $key: key,
                            $value: value
                        };
                });
            }
        };
    });
}());
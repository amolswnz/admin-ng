<?php 
/*
    Examples:
*/
require_once 'Session.php';
// We get the instance
$data = Session::getInstance();

// Let's store datas in the session
$data->nickname = 'Someone';
$data->age = 18;

// Let's display datas
printf( '<p>My name is %s and I\'m %d years old.</p>' , $data->nickname , $data->age );

/*
    It will display:
    
    Array
    (
        [nickname] => Someone
        [age] => 18
    )
*/

printf( '<pre>%s</pre>' , print_r( $_SESSION , TRUE ));

// TRUE
var_dump( isset( $data->nickname ));

// We destroy the session
$data->destroy();

// FALSE
var_dump( isset( $data->nickname ));

?>
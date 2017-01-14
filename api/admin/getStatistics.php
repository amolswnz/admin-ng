<?php 
    require_once '../Classes/User.php';
    require_once '../Classes/Session.php';

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not authorised to access this page.'));
        die();
    }

    $user = new User();
    $result = $user->getStatistics();

    if($result) {
        echo json_encode(array("success"=> $result));
    }
    else
        echo json_encode(array("error"=> "The details cannot be accessed at this moment. Please try again later."));
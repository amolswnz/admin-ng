<?php 
    require_once '../Classes/User.php';
    require_once '../Classes/Session.php';

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);        // Convert from object to array

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not authorised to access this page.'));
        die();
    }

    $users = new User();
    if($users->deleteUser($request))
        echo json_encode(array("success"=> "The user has been deleted from database."));
    else
        echo json_encode(array("critical"=> "The user details cannot be found in database."));
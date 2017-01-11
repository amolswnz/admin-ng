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
    $userData = $users->getUser($request);
    echo json_encode($userData);
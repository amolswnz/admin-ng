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

    $request['createdBy'] = $session->id;       // Add session id to request 

    $user = new User();
    $result = $user->addUser($request);
    if($result)
        echo json_encode(array("success"=> "The user details has been added to database."));
    else
        echo json_encode(array("critical"=> "The user details cannot be added in database."));
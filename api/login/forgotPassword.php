<?php 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);        // Convert from object to array

    require_once '../Classes/User.php';

    $user = new User();
    $userDetails = $user->resetPassword($request['emailId']);
    
    if($userDetails)
        echo json_encode(array('success' => "Success! Your password has been reset. Please check your email."));
    else 
        echo json_encode(array('error'=> "Sorry! Please enter your registered email address."));
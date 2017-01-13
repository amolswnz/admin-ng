<?php 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);        // Convert from object to array

    require_once '../Classes/User.php';
    require_once '../Classes/Session.php';

    $user = new User();
    $userDetails = $user->authUser($request);
    if($userDetails) {
        if($userDetails['status'] == "Active") {
            $session = Session::getInstance();
            $session->id = $userDetails['id'];
            $session->name = $userDetails['fullName'];
            $session->role = $userDetails['role'];
        }
        else if($userDetails['status'] == "Inactive") {
            $result = "Sorry! Your account has not be activated. Plese contact Administrator.";
        }
        else if($userDetails['status'] == "Deleted") {
            $result = "Sorry! Your account has been deleted by Administrator.";
        }
        echo json_encode(array(strtolower($userDetails['status']) => "User active and login successfully."));
    }
    else 
        echo json_encode(array('error'=> "Sorry! Your email and password combination do not match."));
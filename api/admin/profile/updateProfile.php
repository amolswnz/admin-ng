<?php 
    require_once '../../Classes/User.php';
    require_once '../../Classes/Session.php';

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not logged in.'));
        die();
    }

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata, true);        // Convert from object to array

    $user = new User();

    if(! $user->checkPwd($session->id, $request['currentPwd'])) {
        echo json_encode(array('pwdError'=> 'Your current password do not match with our records.'));
        die();
    }

    if($request['userData']['newPwd'] == '')
        unset($request['userData']['newPwd']);
    else {
        $request['userData']['pwd'] = $request['userData']['newPwd'];
        unset($request['userData']['newPwd']);
    }


    $result = $user->updateUser($request['userData'], $session->id);
    if($result)
        echo json_encode(array("success"=> "The user details has been updated."));
    else
        echo json_encode(array("critical"=> "The user details cannot be updated in database."));
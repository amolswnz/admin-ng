<?php 
    require_once '../../Classes/User.php';
    require_once '../../Classes/Session.php';

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not logged in.'));
        die();
    }

    $users = new User();
    $userData = $users->getUser($session->id);
    echo json_encode($userData);
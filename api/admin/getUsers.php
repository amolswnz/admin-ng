<?php 
    require_once '../Classes/User.php';
    require_once '../Classes/Session.php';

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not authorised to access this page.'));
        die();
    }

    $users = new User();
    $allUsers = $users->getUsers();
    echo json_encode($allUsers);
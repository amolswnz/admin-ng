<?php 
    require_once 'User.php';
    require_once 'Session.php';

    $session = Session::getInstance();
    $user = new User();
    $userDetails = $user->getUser(1);

    var_dump($userDetails);
    $session->fullName = $userDetails['fullName'];
    $session->fullName = $userDetails['fullName'];

    var_dump($session->fullName);
    $session->destroy();
    $session->fullName=null;
    var_dump($session->fullName); 


    
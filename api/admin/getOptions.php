<?php 
    require_once '../Classes/User.php';
    require_once '../Classes/Session.php';

    $users = new User();

    $roles = $users->getRoles();    
    $statuss = $users->getStatuss();

    echo json_encode(array("roles"=> $roles, "statuss" => $statuss));
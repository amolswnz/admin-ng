<?php 
    require_once '../Classes/Session.php';

    $session = Session::getInstance();
    if(! $session->id) {
        echo json_encode(array('error'=> 'You are not authorised to access this page.'));
        die();
    }

    echo json_encode(array( "id" => $session->id, "name" => $session->name, "role"=> $session->role));
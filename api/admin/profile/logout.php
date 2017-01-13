<?php 
    require_once '../../Classes/Session.php';

    $session = Session::getInstance();
    $session->destroy();

    echo json_encode(array("success"=>"You have been looged out successfully !"));
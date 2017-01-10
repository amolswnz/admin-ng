<?php 
$data = [
    'id' => '9999',
    'fullName' => 'asdf qwer',
    'email' => 'asdf@asdf.com',
    'username' => 'adsf',
    'avatar' => 'asdf',
    'pwd' => 'qwer',
    'createdBy' => '1' ];

    var_dump($data);

    require 'User.php';

    $user = new User();

    if(! $user->addUser($data)) 
        echo "user already exists";

//
//     
        // if( $user->resetPassword(999) ) 
        //     echo "done";
        // else
        //     echo "error";   
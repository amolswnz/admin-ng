<?php
require_once 'Database.php';
const USERS_TABLE = "am_users";
const HASH_SALT = "Rand0m!S@lt";
const SITE_NAME = "Administrator Management";

class User {
    private $pdo;

    function __construct() 
    {
        $dbInstance = Database::getInstance();
        $this->pdo = $dbInstance->getConnection(); 
    }

    public function getUsers()
    {
        $sql = "SELECT * FROM " . USERS_TABLE;
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }

    public function getUser($id)
    {
        $sql = "SELECT * FROM " . USERS_TABLE . " WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $id);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

    public function authUser($userData)
    {
        $sql = "SELECT * FROM " . USERS_TABLE . " WHERE email = ? AND pwd = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $userData['email']);
        $stmt->bindValue(2, $this->hashPassword($userData['pwd']));
        $stmt->execute();
        return $stmt->fetch();
    }

    public function addUser($userData)
    {
        /* Check for duplicate email address */
        $sql = "SELECT * FROM " . USERS_TABLE . " WHERE email = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $userData['email']);
        $stmt->execute();
        if($stmt->fetch())  
            return null;

        $keys = implode(",", array_keys($userData));
        $questionMarks = Database::placeholders($userData);
        
        $sql = "INSERT INTO " . USERS_TABLE . " ($keys) VALUES ($questionMarks)";
        $stmt = $this->pdo->prepare($sql);

        $count=1;
        $userData['pwd'] = $this->hashPassword($userData['pwd']);
        foreach ($userData as $value) {
            $stmt->bindValue($count++, $value);
        }

        $stmt->execute();
        return $this->pdo->lastInsertId();    
    }

    public function updateUser($userData, $id)
    {
        if(isset($userData['id']))
            unset($userData['id']);                             
            /** Remove id from the userData array if present 
                otherwise it will be inserted in UPDATE SQL Query **/

        $setValues = Database::setValues($userData);             // Build query string

        $sql = "UPDATE " . USERS_TABLE . " SET $setValues WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
    
        $count=1;
        foreach ($userData as $value) {
            $stmt->bindValue($count++, $value);
        }
        $stmt->bindValue($count, $id);
    
        $stmt->execute();
        return $stmt->rowCount();
    }

    public function deleteUser($id)
    {
        $sql = "UPDATE " . USERS_TABLE . " SET status=? WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, "Deleted");
        $stmt->bindValue(2, $id);
       
        $stmt->execute();
        return $stmt->rowCount();
    }

    public function hardDeleteUser($id)
    {
        $sql = "DELETE FROM " . USERS_TABLE . " WHERE id = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $id);
       
        $stmt->execute();
        return $stmt->rowCount();
    }

    public function getRoles() 
    {
        $sql = "SELECT role FROM " . USERS_TABLE . " GROUP BY role";
        $stmt = $this->pdo->prepare($sql);
       
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getStatuss() 
    {
        $sql = "SELECT status FROM " . USERS_TABLE . " GROUP BY status";
        $stmt = $this->pdo->prepare($sql);
       
        $stmt->execute();
        return $stmt->fetchAll();
    }

    private function hashPassword($pwd) {
        $hashedPwd = hash('sha256', $pwd . HASH_SALT);
        return $hashedPwd;
    }

    public function resetPassword($emailId)
    {
        /* Generate Random Password */
        $letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUWXYZ";
        $digits = "1234567890";
        $special="!@%#";
        $length = 8;                                                // Default password length
        $password = substr(str_shuffle($letters), 0, $length-4);    // Random letters
        $password .= substr(str_shuffle($digits), 0, 2);            // At least two numbers
        $password .= substr(str_shuffle($special), 0, 2);           // At least two special characters
        do {
            $password = str_shuffle($password);         // Shuffles the characters of generated password
            if( ! ( in_array($password[0], str_split($special)) || in_array($password[0], str_split($digits)) ) ) 
                break;
            // IF first character of the password is not a special or a digit THEN break loop
            // ELSE loop again 
        } while(1);

        /* UPDATE new password into database */
        $sql = "UPDATE " . USERS_TABLE . " SET pwd=? WHERE email = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $this->hashPassword($password));
        $stmt->bindValue(2, $emailId);
        $stmt->execute();
        if(! $stmt->rowCount() )                        // If no row is updated
            return null;
        
        /* Send email to the user */
        $subject = "Forgot password (" . SITE_NAME . ")";
        $headers = "From:donotreply@seasonsagents.com\r\n";
        $headers .= "Reply-To:donotreply@seasonsagents.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $message = "<html><body style='font-family: Tahoma'>";
        $message .= "<h1>Welcome to " . SITE_NAME . "</h1> <h3>Your account password with " . SITE_NAME . " has been reset.</h3> <h4>Your new password is $password</h4>";
        $message .= "<p>Please do not reply to this email. Emails sent to this address will not be answered.</p>
                    <p> &copy; 2016 " . SITE_NAME . ". All rights reserved. </p></body></html>";
        mail($emailId, $subject, $message, $headers);

        return true;
    }
}
/*
User Array Strucutre
    'id' => '',
    'fullName' => '',
    'email' => '',
    'username' => '',
    'avatar' => '',
    'role' => '',
    'pwd' => '',
    'status' => '',
    'createdBy' => '',
    'createdAt' => '',
    'updatedAt' => ''
*/
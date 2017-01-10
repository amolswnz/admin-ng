<?php
define("HOST","localhost");
define("DATABASE","oophp");
define("USERNAME","root");
define("PASSWORD","");

class Database {
    private $_connection;
    private static $_instance;                              // The single instance

    /* Create instance of the database class */
    public static function getInstance() {
        if(!self::$_instance) {                             // If no instance then make one
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /* Constructor to crete the connection */
    private function __construct() {
        try {
            $this->_connection = new PDO("mysql:host=" . HOST . ";dbname=" . DATABASE, USERNAME, PASSWORD);
            $this->_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->_connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->_connection->exec("SET NAMES 'utf8'");
        } catch(PDOException $e) {
            die("<div class='alert alert-danger'>ERROR : " . $e->getMessage() . "</div>");
        }
    }

    /* Return database connection */    
    public function getConnection() 
    {
        return $this->_connection;
    }

    /* Helper function to generate placeholders  */
    public static function placeholders($dataArray) {
        $result = array();
        for($count=0; $count < sizeof($dataArray); $count++) {
            $result[] = "?";
        }
        return implode(",", $result);
    }

    /* Generating key1 = ?, key2 = ?, ... string for UPDATE query */
    public static function setValues($dataArray) {
        $keys = array();
        foreach ($dataArray as $key => $data) {
            array_push($keys, "$key = ?");
        }
        $setValues = implode(",", $keys);
        return $setValues;
    }
}

<?php
/*
  This is a course requirement for CS 192 Software Engineering II
  under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the
  Department of Computer Science, College of Engineering,
  University of the Philippines, Diliman for the AY 2015-2016

  Code author: Gabe Tamayo

  Code History:
  Programmer            Date        Description
  Gabe Tamayo           3/9/18      File generation

  File creation date: 3/9/18
  Development Group: Luigi del Rosario, Nicole Bilaw, Gabe Tamayo
  Client group: CS 192
  Purpose of code: PHP for inserting into requests database
*/
header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json");
$conn = new mysqli("localhost", "iskuber", "CS192ISLIFE", "iskuber");

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
}

$_POST = file_get_contents("php://input");
$json = json_decode($_POST, true);
var_dump($json);
//$sql = "INSERT INTO requests (userID, driverID, type, schedID, comment) VALUES ('" . (string)$_POST['userID'] . "', '" . (string)$_POST['driverID'] . "', '" . $_POST['type'] . "', '" . (string)$_POST['schedID'] . "', '" . $_POST['comment'] . "')";
$sql = "INSERT INTO requests (userID, driverID, type, schedID, comment) VALUES ('" . (string)$json['userID'] . "', '" . (string)$json['driverID'] . "', '" . $json['type'] . "', '" . (string)$json['schedID'] . "', '" . $json['comment'] . "')";
//print $sql;
$result = $conn->query($sql);
if ($result == true) {
    print "Push successful";
} else {
    print "Push failed";
}
$conn->close();

?>
<?php

session_start();

// see if logged in
if (isset($_POST["login"])) {
	if (isset($_POST["username"]) &&
	($_POST["username"] == "kenny") &&
	isset($_POST["password"]) &&
	($_POST["password"] == "password"))
		{
			$_SESSION["Authenticated"] = 1;
		}	
	else {
		$_SESSION["Authenticated"] = 0;
		header("Location: login.php");
	}
		session_write_close();
		header("Location: index.php");
}


// user is loggin out
if (isset($_GET["logout"])) {
		sesstion_destroy();
	header("Location: login.php");
}


?>
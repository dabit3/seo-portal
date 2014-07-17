<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>SEO Dashboard Login</title>
	<link rel="stylesheet" href="css/app.css">
</head>
<body class="login-body">
	<header class="login-header">
		<div>
			<section>
				<img src="img/logo.png" alt="">
			</section>
		</div>
	</header>
	<div>
		<section class="seo-login-label">
			<div>
				<h2>
					Sign In
				</h2>
			</div>
		</section>

		<section class="seo-login-container">
			<div class="seo-login">
				<form action="auth.php" method="post" name="loginform">
					<p>Username:</p>
					<input type="text" name="username" required>
					<p>Password:</p>
					<input type="text" name="password" required>
					<br />
					<input type="hidden" name="login" value="login">
					<button type="submit" href="index.php">SIGN IN</button>	
				</form>
			</div>
		</section>
	</div>
</body>
</html>
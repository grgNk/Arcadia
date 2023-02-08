<?php
	$name = htmlspecialchars($json->{"name"});
	$age = htmlspecialchars($json->{"age"});
	$status = htmlspecialchars($json->{"status"});
	$email = htmlspecialchars($json->{"email"});
	$about = htmlspecialchars($json->{"about"});
	$feedback = htmlspecialchars($json->{"feedback"});
	echo "<br>Имя: $name.<br>Возраст: $age.<br>Соц. положение: $status.<br>";
	echo "Email: $email.<br>О себе: $about.<br>Отзыв о сайте: $feedback.<br><br>";
	echo "Ожидайте письмо на электронную почту.";
?>
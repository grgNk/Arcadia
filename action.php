<?php
	if(!isset($_POST['json_data']))
		exit("Что-то пошло не так :( Попробуйте ещё раз.");
	
	$json = json_decode($_POST['json_data']);
	$msg_major = htmlspecialchars($json->{"msg_major"});
	$msg_minor = htmlspecialchars($json->{"msg_minor"});
	
	$filename = 'action_' . $json->{"type"} . '.php';
	if(file_exists($filename))
	{
		ob_start();
		include($filename);
		$buf = ob_get_contents();
		ob_end_clean();
		$data = $buf;
	}
	else
		exit("Что-то пошло не так :( Попробуйте ещё раз.");
?>

<html lang="ru">
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/dark.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="img/favicon.png" type="image/x-icon">
    <title>Аркадия: Форма отправлена</title>
</head>
<body>
	<section id="about" style="background-image:url(img/background_00_night.png)">
		<div style="padding-top:50px"></div>
		<div class="info"><?= $msg_major ?></div>
		<div class="splt"></div>
		<div class="info">
			<?= $msg_minor ?><br>
			<?= $data ?>
		</div>
		<div style="padding-top:25px"></div>
		<a class="warp" href="javascript:history.go(-1)">&olarr; Назад</a>
	</section>
</body>
</html>
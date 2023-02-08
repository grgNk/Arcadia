<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/main.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="img/favicon.png" type="image/x-icon">
    <title>Аркадия: Первый сайт!</title>
</head>
<body>
	<div id="agreement" data-txt="<?= file_get_contents('./media/agreement.txt'); ?>"></div>
	
	<section id="about" style="background-image:url(img/background_00.png)">
		<div style="padding-top:50px"></div>
		<div class="info">УКРАШАЕМ ЛЮБОЙ МОМЕНТ САМЫМИ ЯРКИМИ КРАСКАМИ</div>
		<div class="splt"></div>
		<div class="info">Мы — «Аркадия»! Независимый клуб молодых людей из Сургута, которых связала любовь к ботанике и флористике. Теперь мы предоставляем наши услуги на этом сайте!</div>
		<div style="padding-top:70px"></div>
		<a class="warp" href="#service">▼ ПОДРОБНЕЕ ▼</a>
	</section>
	<section id="service">
		<div class="info" style="color:black">НАШИ УСЛУГИ</div>
		<div style="padding-top: 50px"></div>
		<div class="service_list">
			<a href="#" class="service_button"><img src="img/item_00.png" alt="No image"><div>Подбор букетов</div></a>
			<div style="padding: 0px 200px"></div>
			<a href="#" class="service_button"><img src="img/item_01.png" alt="No image"><div>Авторские композиции</div></a>
		</div>
		<div style="padding-top: 30px"></div>
		<div class="splt" style="background-color:black"></div>
		<div style="padding-top: 30px"></div>
		<div class="info" style="color:black;font-weight:500">Хочешь присоединиться к нам?</div>
		<div class="info" style="color:black;font-size:1.65em">
			Заполни
			<a href="" id="membership_caller">ЭТУ ФОРМУ</a>
			и мы обязательно откликнемся на твою заявку по электронной почте!
		</div>
	</section>
	<section id="contact" style="background-image:url(img/background_01.png)">
		<div class="info" style="font-size:3em">СВЯЖИТЕСЬ С НАМИ!</div>
		<div style="padding-top: 50px"></div>
		<a href="tel:000"><img src="img/contacts_00.png" style="height:100px" alt="Позвонить"></a>
		<div style="padding-top: 10px"></div>
		<a href="https://web.telegram.org"><img src="img/contacts_01.png" style="height:100px" alt="Наш телеграм-канал"></a>
		<div style="padding-top: 10px"></div>
		<div class="ftr">
			<div class="lbl">©2022</div>
			<a href="https://tilda.cc/ru/privacy-generator" class="lbl" id="license_caller" style="color:#C6C6C6">Политика конфиденцианальности</a>
			<a href="https://www.surgu.ru/index" class="lbl"><img src="img/logo_01.png" alt="СУРГУ"></a>
		</div>
	</section>
	<nav>
		<a href="#about">О нас</a>
		<a href="#service">Наши услуги</a>
		<img src="img/logo_00.png" alt="Аркадия: Флористика для всех" onclick="theme_toggle()">
		<a href="#service">Вступить к нам</a>
		<a href="#contact">Контакты</a>
	</nav>

	<div class="form_background">
		<div class="form_container">
			<form action="action.php" method="POST">
				<p id="form_title">Заголовок формы</p>
				<input type="text" id="json_data" name="json_data">
				<div id="form_content">
				</div>
				<div class="form_close" onclick="closeForm()">&#10006</div>
			</form>
		</div>
	</div>

	<script src="js/form.js"></script>
	<script src="js/order.js"></script>
	<script src="js/membership.js"></script>
	<script src="js/theme.js"></script>
</body>
</html>
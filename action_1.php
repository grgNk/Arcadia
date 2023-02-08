<?php
	$email = htmlspecialchars($json->{"email"});
	$items = $json->{"items"};
	$counts = $json->{"counts"};
	$size = count($items);

	$i = 0;
	while ($i < $size):
		echo $items[$i] . ' x' . $counts[$i] . '<br>';
		$i++;
	endwhile;
	
	echo "<br>Ожидайте письмо на почту $email.";
?>
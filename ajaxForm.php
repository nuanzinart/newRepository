<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$from = 'superman1908aron@gmail.com';

 echo $name . $email . $phone . $message;


// if (
// 	// empty($name) || empty($email) || empty($subject) || empty($message)
// 	$name == false
// ) {

// 	echo 'Complete the field';
	
	
// } else {
// 	echo $name . " <br> " . $email . " <br> " . $subject . " <br> " . $message;
// }

// if (preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i", $email)) {
// echo "True";
// }else{
// echo "False";
// }

// if(!preg_match("/^[0-9]{10,10}+$/", $phone)) {
// 	echo "False";
// } else {
// 	echo "True";
// }

// ;


mail($email,'PHP','PHP','From: ' . $from);

$db_host = 'localhost'; 
$db_user = 'root'; // Логин БД
$db_password = ''; // Пароль БД
$db_base = 'form'; // Имя БД

// Cоздание подключения к базе данных
$link = mysqli_connect($db_host, $db_user, $db_password, $db_base) or die('Ошибка' . mysqli_error($link));
// mysqli_set_charset('utf8');

//Записываем в БД
// $query_insert = 'INSERT INTO messages (name, message) VALUES ("' . $name . '", "' . $message . '")'; 
// mysqli_query($link, $query_insert) or die('Ошибка' . mysqli_error($link));

//Вывод из БД
// $query_select = 'SELECT * FROM messages';
// $result = mysqli_query($link, $query_select) or die('Ошибка' . mysqli_error($link));
// while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
// echo $row["id"] . ' ' . $row["name"] . ' ' . $row["message"] . ' <br />';
// }
// mysqli_free_result($result);


///
$hhh = date("d = F = Y m   s ");



// Закрыть подключения к базе данных
mysqli_close($link);



?>
<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_phone = $_POST['phone'];

$mail_to = 'linkojones@gmail.com';
$subject = 'Email from hyace contact form'];

$body_message = $_POST['message'];

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Message sent successfully');
		window.location = 'http://hyace.com/';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Something went wrong. Please try again. If this continues to persist please send an email to hyace@gmail.com');
		window.location = 'http://hyace.com/';
	</script>
<?php
}
?>

     
 
     
 
     
 
<?php
	$name = $_POST['name'];
	$occupation = $_POST['occupation'];
	$address = $_POST['address'];
	$email = $_POST['email'];
	$folio = $_POST['folio'];
	$dpidnumber = $_POST['dpidnumber'];
	$clientid = $_POST['clientid'];
	$shares = $_POST['shares'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	$subject = $_POST['subject'];


	// PUT THE EMAIL ID WHERE YOU WANT TO RECIEVE THE CONTACT FORM DETAILS	
	$to = 'santanuchowdhury04@gmail.com';

	// EMAIL ID WHICH SHOWS IN THE FROM SECTION OF MAIL
	$from = 'email@your-domain.com';

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
	    'Reply-To: '.$from."\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	// Compose a simple HTML email message
	$body = '<html><body>';
	$body .= '<h2>Contact Details of PROJECT NAME</h2>';
	$body .= '<table border="1">
	            <tr><th>NAME</th><td>'.$name.'</td></tr>
	            <tr><th>OCCUPATION</th><td>'.$occupation.'</td></tr>
	            <tr><th>ADDRESS</th><td>'.$address.'</td></tr>
	            <tr><th>EMAIL</th><td>'.$email.'</td></tr>
	            <tr><th>FOLIO NO.</th><td>'.$folio.'</td></tr>
	            <tr><th>DP ID NO.</th><td>'.$dpidnumber.'</td></tr>
	            <tr><th>CLIENT ID NO.</th><td>'.$clientid.'</td></tr>
	            <tr><th>ORDINARY SHARES</th><td>'.$shares.'</td></tr>
	            <tr><th>TELEPHONE NO.</th><td>'.$phone.'</td></tr>
	            <tr><th>MESSAGE</th><td>'.$message.'</td></tr>

	            ';

	            
	$body .= '</table>';
	$body .= '</body></html>';

	// Sending email
	if(mail($to, $subject, $body, $headers)){
	  echo "success";
	} else{
	  echo "fail"; 

	}
?>
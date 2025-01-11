/*
-----------------------------------------------
PDF DOWNLOAD AFTER FORM FILLUP
-----------------------------------------------
*/
$('#contact-form-submit3').on('click',function(){
  if($("#contact-form3").valid())
  {
    var name = $("#conName3").val();
    var email = $("#conEmail3").val();
    var phone = $("#conPhone3").val();
    var subject = "enquiry mail";
    var firstName = name;
    
    if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
    }
    $.ajax({
        url: "./mail/contact_me3.php",
        type: "POST",
        data: {
            name: name,
            email: email,
            subject: subject,
            phone: phone
        },
        success: function(response){
            console.log(response);
          if(response == 'success')
          {

            $('#submitMessage3').html("<div class='alert alert-success'>");
            $('#submitMessage3 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage3 > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#submitMessage3 > .alert-success')
                .append('</div>');
            $('#submitMessage3').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form3').trigger("reset");
    
            /* =================== Download PDF =================== */
            downloadPdf();
            /* =================== Download PDF END =================== */
          }
          else{
            $('#submitMessage3').html("<div class='alert alert-danger'>");
            $('#submitMessage3 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage3 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
            $('#submitMessage3 > .alert-danger').append('</div>');
            $('#submitMessage3').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form3').trigger("reset");
            
          }
        }
    })
  }
});

function downloadPdf(){
   var a = $("<a target='blank'>").attr("href", "img/aqua.pdf").attr("download", "aqua.pdf").appendTo("body");
    a[0].click();
    a.remove(); 
}

/*
-----------------------------------------------
REDIRECT TO ANOTHER PAGE
-----------------------------------------------
*/

$('#contact-form-submit').on('click',function(){
  if($("#contact-form").valid())
  {
    var name = $("#conName").val();
    var email = $("#conEmail").val();
    var phone = $("#conPhone").val();
    var subject = "enquiry mail";
    var message = $("#conMessage").val();
    var firstName = name;
    
    if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
    }
    $.ajax({
        url: "./mail/contact_me.php",
        type: "POST",
        data: {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            message: message
        },
        success: function(response){
            console.log(response);
          if(response == 'success')
          {
            $('#submitMessage').html("<div class='alert alert-success'>");
            $('#submitMessage > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#submitMessage > .alert-success')
                .append('</div>');
            $('#submitMessage').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form').trigger("reset");
            
             /* =================== redirect to another page =================== */
            var url = "http://www.spacelifestyle.com/aqua-beaumont/thankyou.php";
            $(location).attr('href',url);
             /* =================== /redirect to another page =================== */

          }
          else{
            $('#submitMessage').html("<div class='alert alert-danger'>");
            $('#submitMessage > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
            $('#submitMessage > .alert-danger').append('</div>');
            $('#submitMessage').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form').trigger("reset");
            
          }
        }
    })
  }
});




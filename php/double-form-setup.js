$('#contact-form-submit').on('click',function(){
  if($("#contact-form").valid())
  {
    var name = $("#conName").val();
    var email = $("#conEmail").val();
    var phone = $("#conPhone").val();
    var subject = "enquiry";
    var solutions = $("#conSolutions").val();
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
            solutions: solutions
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



$('#contact-form-submit2').on('click',function(){
  if($("#contact-form2").valid())
  {
    var name = $("#conName2").val();
    var email = $("#conEmail2").val();
    var phone = $("#conPhone2").val();
    var subject = "enquiry";
    var message = $("#conMessage2").val();
    var solutions = $("#conSolutions2").val();
    var firstName = name;
    
    if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
    }
    $.ajax({
        url: "./mail/contact_me2.php",
        type: "POST",
        data: {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            message: message,
            solutions: solutions
        },
        success: function(response){
            console.log(response);
          if(response == 'success')
          {
            $('#submitMessage2').html("<div class='alert alert-success'>");
            $('#submitMessage2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage2 > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#submitMessage2 > .alert-success')
                .append('</div>');
            $('#submitMessage2').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form2').trigger("reset");
          }
          else{
            $('#submitMessage2').html("<div class='alert alert-danger'>");
            $('#submitMessage2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#submitMessage2 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
            $('#submitMessage2 > .alert-danger').append('</div>');
            $('#submitMessage2').delay(3000).fadeOut();
            //clear all fields
            $('#contact-form').trigger("reset");
            
          }
        }
    })
  }
});
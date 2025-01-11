
$("#contact-form").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      number: true
    },
    subject: {
      required: true
    },
    message: {
      required: true
    }
  }
});
 






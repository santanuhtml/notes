
$("#contact-form").validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    address: {
      required: true
    },
    phone: {
      required: true,
      number: true
    },
    message: {
      required: true
    }
  }
});
 






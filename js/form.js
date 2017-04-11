document.querySelector('input[type=submit]').addEventListener('click', sendForm);
function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
	  e.preventDefault(); // Prevent form submit
    // Instead of alert write code that sends valid form
    alert($.ajax({
                url: "https://formspree.io/alionka_g@mail.ru",
                method: "POST",
                data: {
                    name: $('#client_name').val(),
                    email: $('#client_email').val(),

                },
                dataType: "json"
            })
            .done(function() {
                $('form').html("Дякуємо!<br>Ми з Вами зв'яжемось у найкоротший термін");
            });
    });
  }
}

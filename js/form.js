// document.querySelector('input[type="btn"]').addEventListener('click', sendForm);
// function sendForm(e) {
//   var form = document.querySelector('form');
//   if (form.checkValidity()) {
// 	  e.preventDefault(); // Prevent form submit
//     // Instead of alert write code that sends valid form
//     alert($.ajax({
//                 url: "https://formspree.io/alionka_g@mail.ru",
//                 method: "POST",
//                 data: {
//                     name: $('#client_name').val(),
//                     email: $('#client_email').val(),
//                      comment: $('#comment').val(),

//                 },
//                 dataType: "json"
//             })
//             .done(function() {
//                 $('form').html("Дякуємо!<br>Ми з Вами зв'яжемось у найкоротший термін");
//             })
//     );
//   }
// }

$('button').click(function() {
    location.href = "index.html";
});

$(function() {
    $(':submit').click(sendForm);
});

function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/bodjabdld@gmail.com",
                method: "POST",
                data: {
                    name: $('#client_name').val(),
                    email: $('#client_email').val(),
                    comment: $('#comment').val(),

                },
                dataType: "json"
            })

    }
}
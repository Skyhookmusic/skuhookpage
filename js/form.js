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

// $('.button').click(function() {
//     location.href = "index.html";
// });

// $('.button').click(function() {
//     location.href = "form.html";
// });

 $(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });
});
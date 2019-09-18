/* อันนี้ไม่smooth */
// $(function() {
//     $('a[href*=\\#]').on('click', function(e) {
//         e.preventDefault();
//         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
//     });
// });

/* อันนี้smooth */

$(function() {
    // $(document).ready(function() { ใช้ได้เหมือนกันอันบนสั้นกว่า
    $('a[href*=\\#]').on('click', function() {
        var target = $(this.hash);
        //this.hash ไว้อ่าน attibute href ง่ายๆคือมันคือ # ของ href กับ id
        //ตัวอย่าง
        /** this.hash will be #foobar.// เรามี  #foobar
         * When you then use $(this.hash).show(),  //เราเรียกใช้ด้วย $(this.hash)
         * it's equivalent to doing $("#foobar").show(), //เท่ากับ $(#foobar)
         * so it will show the element with id="foobar". //เท่ากับเราชี้ไปยัง id='foobar'
         * */
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    });
});

//แบบ auto
// $(function() {
//     var target = $('.content');
//     if (target.length) {
//         $('html,body').animate({
//             scrollTop: target.offset().top
//         }, 1000);
//         return false;
//     }
// });
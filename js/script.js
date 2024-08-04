// Event pada saat link diklik
$(".page-scroll").on("click", function (e) {
  // Ambil isi href
  var href = $(this).attr("href");

  // Tangkap elemen tujuan
  var elementTujuan = $(href);

  // Pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elementTujuan.offset().top - 50,
    },
    // Durasi animasi dalam milidetik
    1250,
    "easeInOutExpo"
  );
  

  e.preventDefault();
});

// about
$(window).on('load',function() {
  $('.pKiri').addClass('pMuncul');
  $(".pKanan").addClass("pMuncul");
});


// parallax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  // jumbotron
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll/2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll/1.2 + "%)",
  });

  // portofolio
  if( wScroll > $('.portofolio').offset().top - 250 ) {
    $('.portofolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $(".portofolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i+1));
    });
  }



});
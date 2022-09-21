window.onscroll = function () {
    // code tao hieu ung xuat hien thanh mau den khi scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // translate(-50%,0)
        $('#header-style').addClass("header-scroll");
        $('#header-style').removeClass("header-normal");
    }else{
        $('#header-style').addClass("header-normal");
        $('#header-style').removeClass("header-scroll");
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
} 
// add class active header
var navActive = document.getElementById("header-navbar-nav");
var liList = navActive.getElementsByClassName("nav-item");
for (var i = 0; i < liList.length; i++) {
    liList[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active","");
    this.className += " active";
  });
}
// // add class active showcase
// var showcaseActive = document.getElementsByClassName("showcase-nav");
// var liShowcaseList = showcaseActive.getElementsByClassName("showcase-nav-item");
// for (var i = 0; i < liShowcaseList.length; i++) {
//     liShowcaseList[i].addEventListener("click", function(){
//     var liCurrent = document.getElementsByClassName("active");
//     liCurrent[0].className = liCurrent[0].className.replace("active","");
//     this.className += " active";
//   });
// }
$('.num').countUp();
// owl-carosel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
    }
})
// back to top
let mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
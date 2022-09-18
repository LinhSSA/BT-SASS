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
} 

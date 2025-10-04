var scroll = window.pageYOffset; /*Scroll setting on navigation bar*/
window.onscroll = function(){
    var nowscroll = window.pageYOffset;
        if (scroll > nowscroll){
            document.getElementById("nav-cell").style.top = "0";
        }
        else{
            document.getElementById("nav-cell").style.top = "-150px"
        }
        scroll = nowscroll;
}
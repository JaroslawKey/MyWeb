var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n>slides.length){
        slideIndex = 1;
    }

    if(n<1){
        slideIndex=slides.length;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+=" active";
}

b1.onclick = function switchLight() {
    document.getElementById("stl").href ="css/style1.css";
}
b2.onclick = function switchDark() {
    document.getElementById("stl").href="css/style2.css";
}
    

  menu.onclick = function AddMenu() {
    var x = document.getElementById("myMenu");
    var y = document.getElementById("Header");
    if(x.className ==="menu"){
        x.className+=" responsive";
        y.className+=" big";
    }
    else{
        x.className = "menu";
        y.className="her";
    }
}

    
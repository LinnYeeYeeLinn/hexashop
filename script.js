const menuIcon = document.querySelector('.menuIcon');
const ul = document.querySelector('nav ul');
const menu = document.querySelector('.menu');
menuIcon.onclick = () => {
    if(menuIcon.classList.contains('isOpened')){
        ul.style.display = "none";    
        menu.classList.replace('fa-times', 'fa-bars');
        menuIcon.classList.remove('isOpened');
    }else{
        ul.style.display = "block";  
        menu.classList.replace('fa-bars', 'fa-times');
        menuIcon.classList.add('isOpened');
    }
}

$(document).ready(function(){
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    })
})
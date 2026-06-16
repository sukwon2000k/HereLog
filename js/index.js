var start= document.querySelector('.start');
var loginSign= document.querySelectorAll('.btn');
var header = document.querySelector('.header');


start.onclick=function(){
     loginSign.forEach(btn => {
        btn.classList.add('show');
        
    });
    header.style.transform = 'translateY(-100px)';
    header.style.transition = '0.6s ease';
    start.style.display = 'none';
}
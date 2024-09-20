const menuBtn = document.getElementById('menu-btn');
const mobileMenuEL = document.getElementById("mobileMenu");

menuBtn.addEventListener('click',function(){
    menuBtn.children[0].classList.toggle('hidden');
    const menuCloseBtn = document.getElementById('close-icon');
    menuCloseBtn.classList.toggle('hidden');
    mobileMenuEL.classList.toggle('hidden');
    mobileMenuEL.classList.toggle('flex');
})
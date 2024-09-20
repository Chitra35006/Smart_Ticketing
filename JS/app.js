const menuBtn = document.getElementById('menu-btn');
const mobileMenuEL = document.getElementById("mobileMenu");
console.log(menuBtn.children[0]);
    console.log(menuBtn.children);
menuBtn.addEventListener('click',function(){
    menuBtn.children[0].classList.toggle('hidden');
    
    const menuCloseBtn = document.getElementById('close-icon');
    menuCloseBtn.classList.toggle('hidden');
    mobileMenuEL.classList.toggle('hidden');
    mobileMenuEL.classList.toggle('flex');
})
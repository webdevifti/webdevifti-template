const toggleMenuBtn = document.querySelector('#mobileMenu');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const mobilemenu = document.querySelector('.m-menu');
const overlay = document.querySelector('.overlay');

toggleMenuBtn.addEventListener('click', function(){
    mobilemenu.style.display = 'block';
    overlay.style.display = 'block';
});

menuCloseBtn.addEventListener('click', function(){
    mobilemenu.style.display = 'none';
    overlay.style.display = 'none';
})
overlay.addEventListener('click', function(){
    mobilemenu.style.display = 'none';
    overlay.style.display = 'none';
})
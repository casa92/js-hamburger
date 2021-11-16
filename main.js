// //METODO 1
// const hambugerIcon = document.querySelector('i.fas.fa-bars');
// const hamburgerMenu = document.querySelector('.hamburger-menu');

// hambugerIcon.addEventListener('click', 
//     function() {
//         hamburgerMenu.style.display = 'block';
//     } 
// );

// const closehamburgerMenu = document.querySelector('.close');

// closehamburgerMenu.addEventListener('click',
//     function() {
//         hamburgerMenu.style.display = 'none'
//     }
// );

//METODO 2
const hambugerIcon = document.querySelector('.header-right > a');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hambugerIcon.addEventListener('click', 
    function() {
        hamburgerMenu.classList.add('active');
    }
);

const closehamburgerMenu = document.querySelector('.close');

closehamburgerMenu.addEventListener('click',
    function() {
        hamburgerMenu.classList.remove('active');
    }
);




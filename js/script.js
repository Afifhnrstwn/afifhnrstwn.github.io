// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// menghilangkan nav samping
const hamburger = document.querySelector('#menu');
const searchBtn = document.querySelector('#search-button')

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// Toggle class active shooping cart
const ShoopingCard = document.querySelector('.shooping-cart');
const sc = document.querySelector('#shopping-cart-button')

document.querySelector('#shopping-cart-button').onclick = (e) => {
    ShoopingCard.classList.toggle('active');
    e.preventDefault();
}

// Keluar class acive
document.addEventListener('click', function(e) {
    if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
    
    if(!sc.contains(e.target) && !ShoopingCard.contains(e.target)) {
        ShoopingCard.classList.remove('active')
    }
})

// modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
})


// tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// close modal sembarang
window.onclick = (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}
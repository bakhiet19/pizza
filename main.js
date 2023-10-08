let navbar = document.querySelector('.header .flex .navbar');
let user = document.querySelector('#user-btn');
let user_account = document.querySelector('.user-account');
let closes = document.querySelector('#close')
let orders = document.querySelector('#order-btn')
let close_order = document.querySelector('#close_order')
let cart = document.querySelector('#cart-btn')


document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active')
}


user.addEventListener('click',function(){
    user_account.classList.add('active')
})

closes.onclick = function(){
    user_account.classList.remove('active')
}


window.onscroll = function(){
    navbar.classList.remove('active')
}


orders.onclick = function(){
    document.querySelector('.my-orders').classList.add('active')
}


close_order.onclick = function(){
    document.querySelector('.my-orders').classList.remove('active')
}



cart.onclick = function(){
    document.querySelector('.shopping-cart').classList.add('active')
}

document.querySelector('#cart').onclick = function(){
    document.querySelector('.shopping-cart').classList.remove('active')
}





let slide = document.querySelectorAll('.slide');
let i =0;

function next(){
    slide[i].classList.remove('active');
    i = (i + 1) % slide.length;
    slide[i].classList.add('active')
}



function prev(){
    slide[i].classList.remove('active');
    i = (i - 1 + slide.length) % slide.length;
    slide[i].classList.add('active')
}






function tops(){
    window.scrollTo(0,0)
}

























// function prev(ele){
//     ele.classList.add('active')
// }

// slide.forEach(prev(ele))

// left.onclick = prev()
// right.onclick = next()














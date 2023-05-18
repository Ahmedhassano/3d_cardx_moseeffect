let card1 = document.querySelector('.card1');
let card = document.querySelector('.card');

let x,
  y,
  posY = card1.getBoundingClientRect().top,
  posX = card1.getBoundingClientRect().left,
  movX,
  movY;
window.addEventListener('mousemove', function (e) {
  (x = e.clientX), (y = e.clientY);
});
card1.addEventListener('mousemove', function (e) {
  movY = y - posY - card.clientHeight / 2;
  movX = x - posX - card.clientWidth / 2;
  card.style.transform = `translateX(${movX * 0.4}px) translateY(${movY * 0.4}px) rotatex(${movY * -0.05}deg) rotatey(${
    movX * 0.05
  }deg) 
     
    `;
});
card1.addEventListener('mouseleave', function (e) {
  card.style.transform = ``;
});

const btn3 = document.querySelector('.menu-link3');
btn3.onmousemove = function(e) {
  const x = e.pageX - btn3.offsetLeft;
  const y = e.pageY - btn3.offsetTop;

  btn3.style.setProperty('--x', x + 'px');
  btn3.style.setProperty('--y', y + 'px');
}

const btn2 = document.querySelector('.menu-link2');
btn2.onmousemove = function(e) {
  const x = e.pageX - btn2.offsetLeft;
  const y = e.pageY - btn2.offsetTop;

  btn2.style.setProperty('--x', x + 'px');
  btn2.style.setProperty('--y', y + 'px');
}

const btn1 = document.querySelector('.menu-link1');
btn1.onmousemove = function(e) {
  const x = e.pageX - btn1.offsetLeft;
  const y = e.pageY - btn1.offsetTop;

  btn1.style.setProperty('--x', x + 'px');
  btn1.style.setProperty('--y', y + 'px');
}
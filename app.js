const addCart = (value) => {
  console.log(value.id);
  value.innerHTML = 'Agregado al carrito...';
  if (value.id == 'comprar1') {
    document.getElementsByClassName('img1')[0].style.background = 'blue';
    // document.getElementsByClassName('img1')[0].style.opacity = '0.02';
  } else if (value.id == 'comprar2') {
    document.getElementsByClassName('img2')[0].style.background = 'green';
  } else if (value.id == 'comprar3') {
    document.getElementsByClassName('img3')[0].style.background = 'yellow';
  }
};

const comprar1 = document.getElementById('comprar1');
const comprar2 = document.getElementById('comprar2');
const comprar3 = document.getElementById('comprar3');

comprar1.addEventListener('click', () => addCart(comprar1));
comprar2.addEventListener('click', () => addCart(comprar2));
comprar3.addEventListener('click', () => addCart(comprar3));

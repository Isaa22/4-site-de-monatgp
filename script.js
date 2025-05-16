const btnDica = document.getElementById('btnDica');
const dica = document.getElementById('dica');

btnDica.addEventListener('click', () => {
  if (dica.style.display === 'block') {
    dica.style.display = 'none';
    btnDica.textContent = 'Mostrar Dica';
  } else {
    dica.style.display = 'block';
    btnDica.textContent = 'Esconder Dica';
  }
});

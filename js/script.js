document.addEventListener('DOMContentLoaded', () => {

    // Pega todos os elementos que estão no navbar (navbarBurguer)
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Adiciona uma ação para cada um
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Pega o elemento do dataTarget atributo
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Ativa a classe "is-active" tanto na "navbar-burger" quanto no "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  });
  
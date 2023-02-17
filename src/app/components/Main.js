// este componente funcional sí va a tener parámetros (propiedades) que serán los posts
// se harán peticiones asíncronas para ver que viene la información correcta y así pintar
// cada tarjeta
export function Main() {
    const $main = document.createElement('main');
    $main.id = 'main';
    $main.classList.add('grid-fluid');
    return $main;
  }
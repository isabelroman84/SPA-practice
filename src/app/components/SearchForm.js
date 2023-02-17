export function SearchForm() {
    const $form = document.createElement('form');
    const $input = document.createElement('input');
  
  //   el buscador nos va a ayudar a hacer las peticiones al endpoint en la API
    $form.classList.add('search-form');
    //   hay que darle nombre al input para poder programarlo posteriormente
    //   el input por default es de tipo texto
    $input.classList.add('input-search');
    $input.name = 'search';
    //   cuando sale el tipo se puede limpiar la cajita, es un input de tipo semántico
    $input.type = 'search';
    $input.placeholder = 'Buscar...';
    $form.appendChild($input);
    return $form;
  }
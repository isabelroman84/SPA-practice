import api from '../helpers/fb_api.js';

// todo lo que se cree con createElement se crea como nodo y por eso usamos
// appendChild
export function Title() {
  const $h1 = document.createElement('h1');
  $h1.innerHTML = `
     <a href="${api.DOMAIN}" target="_blank" rel="noopener">
     ${api.NAME.toUpperCase()}</a>
     `;
  // esta función va a retornar el nodo que está guardado en la variable h1
  return $h1;
}
// vamos a tener la invocación de las peticiones, dependiendo la sección
// de contenido que necesitemos
import api from '../helpers/fb_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';

export async function Router() {
  const d = document;
  //   const w = window;
  const $main = d.getElementById('main');

  const { hash } = window.location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = '';
        // posts es el resultado que viene de la petición ajax y entonces por cada post,
        // renderízame un componente postCard
        posts.forEach((post) => html += PostCard(post)),
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes('#/search')) {
    $main.innerHTML = `
    <h2>Sección del Buscador</h2>;
    `;
  } else if (hash === '#/contacto') {
    $main.innerHTML = `
    <h2>Sección de Contacto</h2>;
    `;
  } else {
    $main.innerHTML = `
    <h2>Aquí cargará contenido del Post previamente seleccionado</h2>;
    `;
  }
  d.querySelector('.loader').style.display = 'none';
}
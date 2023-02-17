// este es el que me va a permitir imprimir una tarjeta por cada post
// que me llegue de la petición
// voy a usar código HTML textual porque tiene más elementos y sería más engorroso,
// además se aprovecha el componente vacío que es Posts y a ese se le puede agregar innerHTML
// esta postcard se va a generar en el DOM por cada post que haya recibido la petición
export function PostCard(props) {
    const {
      date, slug, title, _embedded,
    } = props;
    const dateFormat = new Date(date).toLocaleDateString();
    const urlPoster = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url
      : 'app/assets/city-fest.png';
    return `
      <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
      <time datatime="${date}">${dateFormat}</time>
      <a href="#/${slug}">Ver Publicación</a>
      </p>
      </article>
      `;
  }
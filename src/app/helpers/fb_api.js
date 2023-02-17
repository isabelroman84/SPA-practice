// estas son las constantes para poder interactuar con la API que va a permitir
// consumir los datos a la SPA (esto es lo que necesitamos consultar)
const NAME = 'malvestida';
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
// Para post solamente trae los id, pero si quiero toda la info necesito embed
const POSTS = `${API_WP}/posts?_embed`;
// para un post en particular, sencillo
const POST = `${API_WP}/posts`;
// es con ? para que busque todo lo relacionado al concepto que busque
// search va a tomar como variable lo que el usuario escriba
const SEARCH = `${API_WP}/search?_embed&search=`;

// voy  exportar esto como objeto. Si el nombre del parámetro de la propiedad del objeto
// es igual al nombre de la variable, se puede simplificar
// como lo exportó default, le puede poner el nombre que quiera cuando lo importe
export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  SEARCH,
};
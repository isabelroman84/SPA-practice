import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';

export function App() {
  //   document.getElementById('root').innerHTML = `
  //  <h1>Bienvenidos a mi SPA</h1>`;

  const $root = document.getElementById('root');

  // los paréntesis son porque Title es una función
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  // como el router es lo que se tiene que ejecutar no se va a agregar como nodo
  // es la funcionalidad
  Router();
  // $root.append(Title(), Loader());
}
// necesita unas props porque es un objeto
// ajax({
//   url: api.POSTS,
//   cbSuccess: (posts) => {
//     console.log(posts);
//   },
// });

// console.log(api);
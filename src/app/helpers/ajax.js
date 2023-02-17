// a la función ajax le paso el objeto props y lo voy a generalizar
export async function ajax(props) {
    const { url, cbSuccess } = props;
  // una función asíncrona nos permite usar await
    //   si se cumple, convierte la data a json
    // si la propiedad statusText está configurada ese sería el error y si no
    //
    await fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => cbSuccess(json))
      .catch((err) => {
        const message = err.statusText || 'Ocurrió un error al acceder a la API';
  
        document.getElementById('main').innerHTML = `
        <div class = 'error> 
        <p>Error ${err.status}: ${message}</p>
        </div>
        `;
        document.querySelector('.loaded').style.display = 'none';
      });
  }
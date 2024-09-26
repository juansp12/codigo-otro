const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');



async function displayUser(username) {
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  if(!response.ok){
    throw new Error(`Usuario no encontrado: ${response.status}`);
  } 
  const data = await response.json();

  
  $n.textContent = data.name || 'No disponible';
  $b.textContent = data.blog || 'No disponible';
  $l.textContent = data.location || 'No disponible';
} catch (err) {
  
  handleError(err);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`
}

displayUser('stolinski').catch(handleError);
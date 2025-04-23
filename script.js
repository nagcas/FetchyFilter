// Verifico se il mio script è collegato correttamente al document html
console.log("It's working...");


// Recupero gli elementi del DOM: campo di ricerca e lista utenti
const search = document.getElementById('searchInput');
const usersList = document.getElementById('users');
console.log(search);

// Array per memorizzare gli utenti ricevuti dalla API
let users = [];

// Quando la pagina è completamente caricata
window.addEventListener('DOMContentLoaded', async () => {
  // Mostro un messaggio di caricamento
  usersList.innerHTML = '<h1>Loading...</h1>';
  console.log('loaded');

  // Carico gli utenti dalla API
  const data = await loadUsers();
  console.log(data.data);

  // Salvo gli utenti ricevuti nell'array globale
  users = data.data;

  // Visualizzo gli utenti nella lista
  renderUsers(users);
});


// Funzione per caricare gli utenti dalla Faker API
async function loadUsers() {
  const response = await fetch('https://fakerapi.it/api/v2/users?_quantity=100'); // Richiesta HTTP
  return await response.json(); // Converto la risposta in JSON
}


// Event listener per la ricerca in tempo reale
search.addEventListener('keyup', (e) => {
  console.log(search.value);

  // Filtro gli utenti in base al testo inserito nel campo di ricerca
  const newUsers = users.filter(user => 
    `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(search.value.toLowerCase())
  );

  // Visualizzo solo gli utenti filtrati
  renderUsers(newUsers);
});


// Funzione che crea gli elementi HTML <li> per ogni utente
const createUserItems = users => users.map(user => 
  `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer py-2">
    ${user.firstname} ${user.lastname}
  </li>`
).join(' '); // Unisco tutti gli elementi in un'unica stringa


// Funzione che aggiorna il contenuto della lista utenti nel DOM
function renderUsers(users) {
  const itemsString = createUserItems(users); // Creo gli <li>
  usersList.innerHTML = itemsString; // Inserisco nella lista
}
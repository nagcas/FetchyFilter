# 🧑‍💻 Fetch & Filter - User Search App

Una semplice applicazione web realizzata in **JavaScript** che consente di **caricare utenti fake** tramite una chiamata `fetch` alla [Faker API](https://fakerapi.it/), e di **filtrarli in tempo reale** tramite un campo di ricerca.

## 🔍 Funzionalità

- Recupero di 100 utenti fake tramite API
- Rendering dinamico della lista utenti
- Funzionalità di ricerca istantanea per nome e cognome
- Stile moderno e responsive con **TailwindCSS**

## 🚀 Demo

Puoi vedere l'app in azione semplicemente aprendo `index.html` in un browser.

## 📁 Struttura del progetto
```
📦 project-folder/ 
├── index.html # HTML principale 
├── script.js # Script JavaScript per fetch, filter e render ├── style.css # (opzionale) file di stile aggiuntivo
```

## 🔧 Come funziona

1. Quando la pagina viene caricata (`DOMContentLoaded`), l'app esegue una `fetch` alla seguente endpoint:

https://fakerapi.it/api/v2/users?_quantity=100


2. I dati ricevuti (lista di utenti) vengono salvati in un array `users`.

3. Ogni utente viene mostrato in un `<li>` con il formato:
```
Nome Cognome
```

4. Quando digiti nel campo di ricerca, la lista viene filtrata in tempo reale in base al nome o cognome.

## 💡 Tecnologie usate

- HTML5
- JavaScript (Vanilla)
- Fetch API
- Tailwind CSS (via CDN)
- Faker API


## 📚 Risorse utili

- [Faker API Docs](https://fakerapi.it/en)
- [TailwindCSS](https://tailwindcss.com/)

## 🧑‍🎓 Autore

Gianluca Chiaravalloti  
Full Stack Web Developer  
[LinkedIn](https://www.linkedin.com/in/gianlucachiaravalloti/) | [GitHub](https://github.com/tuo-username)




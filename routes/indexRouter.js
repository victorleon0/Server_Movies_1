const express = require("express");
const router = express.Router();


router.get('/hello', (req, res) => {
    res.send("Hola Mundo")
})


router.get("./movies", (req, res) => {
    const movies = [
        {
          title: 'The Matrix',
          director: 'Hermanas Wachowski',
          year: 1999,
          genre: 'Acción',
        },
        {
          title: 'The Matrix Reloaded',
          director: 'Hermanas Wachowski',
          year: 2003,
          genre: 'Acción',
        },
        {
          title: 'Buscando a Nemo',
          director: 'Andrew Stanton',
          year: 2003,
          genre: 'Animación',
        },
        {
          title: 'Buscando a Dory',
          director: 'Andrew Stanton',
          year: 2016,
          genre: 'Animación',
        },
        {
          title: 'Interestelar',
          director: 'Christopher Nolan',
          year: 2014,
          genre: 'Ciencia ficción',
        },
        {
          title: '50 primeras citas',
          director: 'Peter Segal',
          year: 2004,
          genre: 'Comedia romántica',
        },
      ];
    
      
    res.send(movies)
})

module.exports = router;
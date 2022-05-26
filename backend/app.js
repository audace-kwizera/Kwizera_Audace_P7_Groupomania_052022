// Import de express
const express = require('express');
// Création de l'application express
const app = express();

// Middleware pour intercepter tout ce qui contient du json
app.use(express.json());

// Middleware cors
// Désactivation sécurité cors pour donner l'accès à tout utilisateur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// Route pour poster un message
app.post('/api/message', (req, res, next) => {
 console.log(req.body);
 res.status(201).json({
  message: 'Message envoyé !'
 });
});

// Route pour récupérer un message
app.get('/api/message', (req, res, next) => {
  const message = [
    {
      idUSERS: 'oeihfzeoi',
      title: 'Mon premier objet',
      content: 'Les infos de mon premier objet',
      attachment: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      likes: '',
    },
		{
      idUSERS: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      content: 'Les infos de mon deuxième objet',
      attachment: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      likes: '',
    },
  ];
  res.status(200).json(message);
});


// Exportation de l'application
module.exports = app;
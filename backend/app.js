// Import de express
const express = require('express');
// Création de l'application express
const app = express();

// Middleware cors
// Désactivation sécurité cors pour donner l'accès à tout utilisateur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Exportation de l'application
module.exports = app;
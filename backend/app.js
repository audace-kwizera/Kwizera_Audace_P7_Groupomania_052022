// Import de express
const express = require('express');
// Création de l'application express
const app = express();

app.use((req, res) => {
	res.json({ message: 'Votre requête a bien été reçue' })
})

// Exportation de l'application
module.exports = app;
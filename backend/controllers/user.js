// Import de bcrypt
const bcrypt = require('bcrypt');
// Import du model user
const User = require('../models/User');


// Enregistrement des utilisateurs
exports.signup = (req, res, next) => {
//hashage du mot de passe
	bcrypt.hash(req.body.password, 10)
	.then(hash => {
		const user = new User({
			email: req.body.email,
			password: hash
		});
		user.save()
		.then(() => res.status(201).json({ message: 'Utilisateur crée' }))
		.catch(error => res.status(400).json({ error }));
	})
	.catch(error => res.status(500).json({ error }));
};

// Log in des utilisateurs
exports.login = (req, res, next) = {

};
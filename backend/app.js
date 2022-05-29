// Import de express
const express = require('express');
// Création de l'application express
const app = express();
// Appel de la base de données
const db = require('./models');

app.use(express.urlencoded({extended: true}));
// Middleware pour intercepter tout ce qui contient du json
app.use(express.json());

// Imports des models
const { User, Message } = require('./models');

// Middleware cors
// Désactivation sécurité cors pour donner l'accès à tout utilisateur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// Route pour poster un message
app.post('/messages', (req, res, next) => {
const createMessage = async (req, res, next) => {
    try {
        const user = await Message.create(req.body);
        return res.status(201).json({
            message,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
//delete req.body._id;
// const message = new Message({
//  ...req.body
// });
// message.save()
//  .then(() => res.status(201).json({ message: 'Message enregistré' }))
//  .catch(error => res.status(400).json({ error: error }));
});

// Afficher tous les messages
app.get('/messages', async (req, res, next) => {
    const messages = await Message.findAll()
    res.json(messages)
})

// Afficher un message selon son id
app.get('/messages/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const message = await Message.findByPk(id)
        if (!message) throw Error('Message not found')
        res.json(message)
    } catch (e) {
        console.log(e)
        res.send('Message not found!')
    }
})



// Route pour récupérer les messages
app.use('/api/message', (req,res, next) => {
    Message.find()
      .then(messages => res.status(200).json(messages))
      .catch(error => res.status(400).json({ error: error }));
});

//// Route pour récupérer les messages
//app.get('/all',( req,res, next )=>{
//    Message.findAll()
//        .then(result =>  res.send(result))
//        .catch(err => console.log(err));
//});


//// Route pour récupérer un message
//app.get('/api/message', (req, res, next) => {
//  const message = [
//    {
//      idUSERS: 'oeihfzeoi',
//      title: 'Mon premier objet',
//      content: 'Les infos de mon premier objet',
//      attachment: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//      likes: '',
//    },
//		{
//      idUSERS: 'oeihfzeomoihi',
//      title: 'Mon deuxième objet',
//      content: 'Les infos de mon deuxième objet',
//      attachment: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//      likes: '',
//    },
//  ];
//  res.status(200).json(message);
//});

	// connection de la db
	db.sequelize.sync().then(req =>{
      app.listen(3306 , ()=>{
          console.log("base de donnée connectée");
      })
	});

// Exportation de l'application
module.exports = app;

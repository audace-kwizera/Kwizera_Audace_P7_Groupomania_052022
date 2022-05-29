const express = require('express');
const router = express.Router;

// Route pour poster un message
router.post('/', (req, res, next) => {
delete req.body._id;
 const Message = new Message({
  ...req.body
 });
 message.save()
  .then(() => res.status(201).json({ message: 'Message enregistré' }))
  .catch(error => res.status(400).json({ error: error }));
});

router.get('/all',( req,res, next )=>{
    Message.findAll()
        .then(result =>  res.send(result))
        .catch(err => console.log(err));

});

// Route pour récupérer un message
router.get('/api/message', (req, res, next) => {
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
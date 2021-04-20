const express = require('express')
let bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
let router = express.Router();
app.use(cors());
const PORT = 80;

let income = 0;

let pets = {
    list: [
       { id: 1, type: 'cat', age: 1, weight: 5, price: 2000 },
       { id: 2, type: 'dog', age: 1, weight: 10, price: 3000 }
    ]
 }
 
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

router.route('/pets')
   .get((req, res) => res.json(pets))
   .post((req, res) => {
    console.log(req.body)
    let newPet = {}
    newPet.id = (pets.list.length)?pets.list[pets.list.length - 1].id + 1:1
    newPet.type = req.body.type
    newPet.age = req.body.age
    newPet.weight = req.body.weight
    newPet.price = req.body.price
    pets = { "list": [...pets.list, newPet] }
    res.json(pets)
})

router.route('/pets/:petId')
   .get((req, res) => {
       const petId = req.params.petId
       const id = pets.list.findIndex(item => +item.id === +petId)
       res.json(pets.list[id])
   })
   .put((req, res) => {
       const ppetId = req.params.petId
       const id = pets.list.findIndex(item => +item.id === +petId)
       pets.list[id].type = req.body.type
       pets.list[id].age = req.body.age
       pets.list[id].weight = req.body.weight
       pets.list[id].price = req.body.price
       res.json(pets.list[id])
   })

   .delete((req, res) => {
       const pet_id = req.params.pet_id
       console.log('petId: ',pet_id)
       pets.list = pets.list.filter(item => +item.id !== +pet_id)
       res.json(pets.list[id])
   })

router.route('/income')
   .get((req, res) => res.json(income))

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(PORT, () => console.log(`lserver sunning ...`))
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const router = express.Router();
const app = express();
const PORT = 80

let bears = {
    list: [ 
            {id: 1, name: "Winnie", weight: 50},
            {id: 2, name: "Pooh", weight: 60}]
    }

let user = { 'name': 'Warodom', 'age': 23 }
    router.route('/users')
   .get((req, res) => res.json(user))
   .put((req, res) => {
       user = { name: req.body.name, age: user.age }
       res.json(user)
   })

app.use(cors())
// app.use('/api', router);
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended:false}) ,router);

router.route('/bears')
    .get((req,res) => res.json(bears))
    .post((req, res) => {
        let id = (bears.list.length) ? bears.list[bears.list.length - 1].id + 1 : 1
        let name = req.body.name
        let weight = req.body.weight
        bears = {list: [...bears.list, {id, name, weight}]}
        res.json(bears)
    })

router.route('/bears/:bear_id')
    .get((req, res) => {
        let id = bears.list.findIndex( (item) => (item.id === +req.params.bear_id) )
        res.json(bears.list[id])
    })
    .put((req,res) => {
        let id = bears.list.findIndex( (item) => (item.id === +req.params.bear_id) )
        bears.list[id].name = req.body.name
        bears.list[id].weight = req.body.weight
        res.json(bears)
    })
    .delete( (req, res) => {
        bears.list = bears.list.filter( item => item.id !== +req.params.bear_id )
        res.json(bears)
    })

app.listen(PORT, () => console.log('Server is running at ',PORT))
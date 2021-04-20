const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const PORT = 80

let students = {
    list: [ 
            {id: 4010341, name: "Warodom", surname: "Werapun", major: "CoE", gpa: 3.3},
            {id: 4010342, name: "John", surname: "Lennon", major: "SE", gpa: 2.87}]
    }

app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended:false}) ,router);

router.route('/students')
    .get((req,res) => res.json(students.list))
    .post((req, res) => {
        let id = (students.list.length) ? students.list[students.list.length - 1].id + 1 : 1
        let name = req.body.name
        let surname = req.body.surname
        let major = req.body.major
        let gpa = req.body.gpa
        students = {list: [...students.list, {id, name, surname, major, gpa}]}
        res.json(students.list)
    })
router.route('/students/:student_id')
    .get((req, res) => {
        let id = students.list.findIndex( (item) => (item.id === +req.params.student_id) )
        if(id == -1){
            res.send('Not Found')
        }
        res.json(students.list[id])
    })
    .put((req,res) => {
        let id = students.list.findIndex( (item) => (item.id === +req.params.student_id) )
        if(id == -1){
            res.send('Not Found')
        }
        students.list[id].name = req.body.name
        students.list[id].surname = req.body.surname
        students.list[id].major = req.body.major
        students.list[id].gpa = req.body.gpa
        res.json(students.list)
    })
    .delete( (req, res) => {
        students.list = students.list.filter( item => item.id !== +req.params.student_id )
        let id = students.list.findIndex( (item) => (item.id === +req.params.student_id) )
        if(id == -1){
            res.send('Not Found')
        }
        res.json(students.list)
    })

app.listen(PORT, () => console.log('Server is running at ',PORT))
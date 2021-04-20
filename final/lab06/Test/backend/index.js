let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

app.use('/api', bodyParser.json(), router); 
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = {
    list: [
        { "id": 4010341, "name": "Warodom", "surname": "Werapun", "major":"CoE", "GPA": 3.3 },
        { "id": 4010342, "name": "John", "surname": "Lennon", "major":"SE", "GPA": 2.87 }]
 }
 
 router.route('/students')
    .get((req, res) => res.json(students))
 
    .post((req, res) => {
        console.log(req.body)
        let newStudent = {}
        newStudent.id = (students.list.length)?students.list[students.list.length - 1].id + 1:1
        newStudent.name = req.body.name
        newStudent.weight = req.body.weight
        students = { "list": [...students.list, newStudent] }
        res.json(students)
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
 

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))


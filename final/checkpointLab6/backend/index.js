let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());
 
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);
 
let students = {
   list: [
       { "id": 4010341, "name": "Warodom", "surname": "Werapun","major": "CoE","gpa": 3.3 },
       { "id": 4010342, "name": "John", "surname": "Lennon","major": "SE","gpa": 2.87 }]
}
 
router.route('/students')
   .get((req, res) => res.json(students))
   .post((req, res) => {
    console.log(req.body)
    let newStudent = {}
    newStudent.id = (students.list.length)?students.list[students.list.length - 1].id + 1:1
    newStudent.name = req.body.name
    newStudent.surname = req.body.surname
    newStudent.major = req.body.major
    newStudent.gpa = req.body.gpa
    students = { "list": [...students.list, newStudent] }
    res.json(students)
    })

router.route('/students/:student_id')
   .get((req, res) => {
       const student_id = req.params.student_id
       const id = students.list.findIndex(item => +item.id === +student_id)
       res.json(students.list[id])
   })
   .put((req, res) => {
    const student_id = req.params.student_id
    const id = students.list.findIndex(item => +item.id === +student_id)
    students.list[id].name = req.body.name
    students.list[id].surname = req.body.surname
    students.list[id].major = req.body.major
    students.list[id].gpa = req.body.gpa
    res.json(students.list[id])
    })
    .delete((req, res) => {
    const student_id = req.params.student_id
    console.log('studentId: ',student_id)
    students.list = students.list.filter(item => +item.id !== +student_id)
    res.json(students.list)
    })
 
app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))

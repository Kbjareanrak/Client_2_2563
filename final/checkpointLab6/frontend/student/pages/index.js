import React, { useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'

const URL = `http://localhost/api/students`
const fetcher = url => axios.get(url).then(res => res.data)
const SWR1 = () => {

   const [student, setStudent] = useState('')
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [major, setMajor] = useState('')
   const [gpa, setGpa] = useState(0)

   const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
   // console.log(data)

   const printStudents = (students) => {
       console.log('Students:', students)
       if (students && students.length)
           return (students.map((student, index) =>
           (<li key={index}>
               {(student) ? student.name : '-'} : {(student) ? student.surname : '-'} : 
               {(student) ? student.major : '-'}: {(student) ? student.gpa : 0}
               <button onClick={() => deleteStudent(student.id)}> Delete </button>
               <button onClick={() => getStudent(student.id)}>Get</button>
               <button onClick={() => updateStudent(student.id)}>Update</button>
           </li>)
           ))
       else {
           return (<h2>No Students</h2>)
       }
   }

   const getStudent = async (id) => {
       const result = await axios.get(`${URL}/${id}`)
       console.log('student id: ', result.data)
       setStudent(result.data)
   }

   const addStudent = async (name, surname, major, gpa) => {
       const result = await axios.post(URL, { name, surname,major, gpa })
       console.log(result.data)
       mutate(URL)
   }

   const deleteStudent = async (id) => {
       const result = await axios.delete(`${URL}/${id}`)
       console.log(result.data)
       mutate(URL)
   }
    const updateStudent = async (id) => {
       const result = await axios.put(`${URL}/${id}`,{
           name,
           surname,
           major,
           gpa
       })
       console.log('Student id update: ', result.data)
       mutate(URL)
   }

   return (<div>
       <h1> Student</h1>
       <ul>{printStudents(data.list)}</ul>

       selected student: {student.name} {student.surname} {student.major} {student.gpa}
       <h2>Add student</h2>
          Name:<input type="text" onChange={(e) => setName(e.target.value)} /><br/>
          Surname:<input type="text" onChange={(e) => setSurname(e.target.value)} /><br/>
          Major:<input type="text" onChange={(e) => setMajor(e.target.value)} /><br/>
          GPA:<input type="number" onChange={(e) => setGpa(e.target.value)}/> <br />
       <button onClick={() => addStudent(name, surname, major, gpa)}>Add new student</button>

   </div>)
}
export default SWR1

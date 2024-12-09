import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import AddStudent from './AddStudent';

function App() {

  const [allStudents, setAllStudents] = useState(null);

  const students = [{
    id: nanoid(),
    firstName: "Demetria",
    lastName: "Dolden",
    email: "ddolden0@sun.com",
    image: 'images/student1.jpg'
  }, {
    id: nanoid(),
    firstName: "Alejandra",
    lastName: "Yurmanovev",
    email: "ayurmanovev1@blogger.com",
    image: 'images/student2.jpg'
  }, {
    id: nanoid(),
    firstName: "Karla",
    lastName: "Leiden",
    email: "kleiden2@cisco.com",
    image: 'images/student3.jpg'
  }, {
    id: nanoid(),
    firstName: "Kendal",
    lastName: "Sell",
    email: "ksell3@latimes.com",
    image: 'images/student4.jpg'
  }, {
    id: nanoid(),
    firstName: "Audry",
    lastName: "Lasslett",
    email: "alasslett4@topsy.com",
    image: 'images/student5.jpg'
  }, {
    id: nanoid(),
    firstName: "Forrest",
    lastName: "Sarchwell",
    email: "fsarchwell5@storify.com",
    image: 'images/student6.jpg'
  }, {
    id: nanoid(),
    firstName: "Elmore",
    lastName: "Abdie",
    email: "eabdie6@dion.ne.jp",
    image: 'images/student7.jpg'
  }, {
    id: nanoid(),
    firstName: "Griff",
    lastName: "Blaszkiewicz",
    email: "gblaszkiewicz7@a8.net",
    image: 'images/student8.jpg'
  }, {
    id: nanoid(),
    firstName: "Aggy",
    lastName: "Foard",
    email: "afoard8@kickstarter.com",
    image: 'images/student9.jpg'
  }, {
    id: nanoid(),
    firstName: "Perceval",
    lastName: "Tipens",
    email: "ptipens9@noaa.gov",
    image: 'images/student10.jpg'
  }];

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents);
  }

  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) => (
          <div className='col-lg-2' key={student.id}>
            <div className='card'>
              <img src={student.image} alt="Our student" />
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{student.firstName}</li>
                <li className='list-group-item'>{student.lastName}</li>
                <li className='list-group-item'>{student.email}</li>
              </ul>
            </div>
          </div>
        ))}
        <div className='col-lg-2'></div>
        <div className='col-lg-2'></div>
        <div className='col-lg-2'></div>
        <div className='col-lg-2'></div>
        <div className='col-lg-2'></div>
      </div>

      {!allStudents && <button type='button' className='btn btn-large btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
    
      <AddStudent addStudent={addStudent}/>
    </div>
  )
}

export default App

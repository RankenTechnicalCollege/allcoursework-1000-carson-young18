import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import AddStudent from './AddStudent';
import _ from 'lodash';
import Student from './Student'

function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('')

  useEffect(() => {
    saveStudents(students);
  }, []);


  const students = [{
    id: nanoid(),
    firstName: "Demetria",
    lastName: "Dolden",
    email: "ddolden0@sun.com",
    image: 'images/student1.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Alejandra",
    lastName: "Yurmanovev",
    email: "ayurmanovev1@blogger.com",
    image: 'images/student2.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Karla",
    lastName: "Leiden",
    email: "kleiden2@cisco.com",
    image: 'images/student3.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Kendal",
    lastName: "Sell",
    email: "ksell3@latimes.com",
    image: 'images/student4.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Audry",
    lastName: "Lasslett",
    email: "alasslett4@topsy.com",
    image: 'images/student5.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Forrest",
    lastName: "Sarchwell",
    email: "fsarchwell5@storify.com",
    image: 'images/student6.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Elmore",
    lastName: "Abdie",
    email: "eabdie6@dion.ne.jp",
    image: 'images/student7.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Griff",
    lastName: "Blaszkiewicz",
    email: "gblaszkiewicz7@a8.net",
    image: 'images/student8.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Aggy",
    lastName: "Foard",
    email: "afoard8@kickstarter.com",
    image: 'images/student9.jpg',
    gradYear: 2024
  }, {
    id: nanoid(),
    firstName: "Perceval",
    lastName: "Tipens",
    email: "ptipens9@noaa.gov",
    image: 'images/student10.jpg',
    gradYear: 2024
  }];

  const saveStudents = (students) => {
    setAllStudents(students);
    setSearchResults(students);
  }

  const addStudent = (newStudent) => {
    const updatedStudents = [...allStudents, newStudent]
    saveStudents(updatedStudents);
  }

  const removeStudent = (studentToDelete) => {
    console.table(studentToDelete);
  }

  const searchStudents = () => {
    let keywordsArray = [];
    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(gradYear){
      keywordsArray.push(gradYear.toString())
    }

    if(keywordsArray.length > 0){
      const searchResults = allStudents.filter(student => {
        for(const word of keywordsArray){
          if(student.firstName.toLowerCase().includes(word) ||
             student.lastName.toLowerCase().includes(word) ||
             student.gradYear === parseInt(word)){
              return true;
             }
        }
        return false;
      });
      setSearchResults(searchResults);
    } 
    else {
      setSearchResults(allStudents);
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        {searchResults && searchResults.map((student) => (
          <div className='col-lg-2' key={student.id}>
            <div className='card'>
              <img src={student.image} alt="Our student" className='card-image-top mx-auto'/>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item text-center'>{student.firstName}</li>
                <li className='list-group-item text-center'>{student.lastName}</li>
                <li className='list-group-item text-center'>{student.email}</li>
                <li className='list-group-item text-center'>{student.gradYear}</li>
              </ul>
            </div>
          </div>
        ))}

      </div>

      {/* {!allStudents && <button type='button' className='btn btn-large btn-success' onClick={() => setAllStudents(students)}>Save Students</button>} */}
    
      <AddStudent addStudent={addStudent}/>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <label htmlFor="txtKeywords">Search by First or Last Name</label>
          <input type="text" className='form-control' placeholder='Search First or Last Name' id='txtKeywords' name='txtKeywords' onChange={e => setKeywords(e.currentTarget.value)} value={keywords}/>
        </div>
        <div className='col-md-4'>
          <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)}>
            <option value="">Select Year</option>
            {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>Search Students</button>
        </div>
      </div>
    </div>
  )
}

export default App

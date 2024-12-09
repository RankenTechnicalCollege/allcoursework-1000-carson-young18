import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>One</li>
            <li className='list-group-item'>Two</li>
            <li className='list-group-item'>Three</li>
          </ul>
        </div>
        <div className='col-lg-2'>Col2</div>
        <div className='col-lg-2'>Col3</div>
        <div className='col-lg-2'>Col4</div>
        <div className='col-lg-2'>Col5</div>
        <div className='col-lg-2'>Col6</div>
      </div>
    </div>
  )
}

export default App

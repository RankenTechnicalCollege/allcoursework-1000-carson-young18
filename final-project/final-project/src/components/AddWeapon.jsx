/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './AddWeapon.css'

const AddWeapon = (props) => {
  const [name, setName] = useState('');
  const [weaponClass, setWeaponClass] = useState('');
  const [frame, setFrame] = useState('');
  const [impact, setImpact] = useState('');
  const [range, setRange] = useState('');
  const [stability, setStability] = useState('');
  const [handling, setHandling] = useState('');
  const [reloadSpeed, setReloadSpeed] = useState('');
  const [aimAssist, setAimAssist] = useState('');
  const [zoom, setZoom] = useState('');
  const [airEffect, setAirEffect] = useState('');
  const [rpm, setRPM] = useState('');
  const [mag, setMag] = useState('');
  const [recoil, setRecoil] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const doWork = () => {
    const newWeapon = {
      'id' : nanoid(),
      'name' : name,
      'weaponClass' : weaponClass,
      'frame' : frame,
      'impact' : impact,
      'image' : URL.createObjectURL(selectedFile)
    }

    props.addWeapon(newWeapon)
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className='container mt-5' id='addWeapon'>
      <h3>Add Weapon</h3>
      <div className='row'>
        <div className='col-md-2'>
          <label htmlFor="txtName" className='form-label'>Name</label>
          <input 
            type="text" 
            name="txtName" 
            id="txtName" 
            placeholder='Name' 
            className='form-control' 
            onChange={(event) => setName(event.currentTarget.value)} 
            value={name}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="txtWeaponClass" className='form-label'>Weapon Class</label>
          <input 
            type="text" 
            name="txtWeaponClass" 
            id="txtWeaponClass" 
            placeholder='Weapon Class' 
            className='form-control'
            onChange={(event) => setWeaponClass(event.currentTarget.value)} 
            value={weaponClass}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="txtFrame" className='form-label'>Frame</label>
          <input 
            type="text" 
            name="txtFrame" 
            id="txtFrame" 
            placeholder='Frame' 
            className='form-control'
            onChange={(event) => setFrame(event.currentTarget.value)} 
            value={frame}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="numImpact" className='form-label'>Impact</label>
          <input 
            type="number" 
            name="numImpact" 
            id="numImpact" 
            placeholder='Impact' 
            className='form-control'
            onChange={(event) => setImpact(event.currentTarget.value)} 
            value={impact}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="numRange" className='form-label'>Range</label>
          <input 
            type="number" 
            name="numRange" 
            id="numRange" 
            placeholder='Range' 
            className='form-control'
            onChange={(event) => setRange(event.currentTarget.value)} 
            value={range}
          />
        </div>
      </div>
      <div className='row'>
      <div className='col-md-2'>
          <label htmlFor="txtName" className='form-label'>Name</label>
          <input 
            type="text" 
            name="txtName" 
            id="txtName" 
            placeholder='Name' 
            className='form-control' 
            onChange={(event) => setName(event.currentTarget.value)} 
            value={name}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="txtWeaponClass" className='form-label'>Weapon Class</label>
          <input 
            type="text" 
            name="txtWeaponClass" 
            id="txtWeaponClass" 
            placeholder='Weapon Class' 
            className='form-control'
            onChange={(event) => setWeaponClass(event.currentTarget.value)} 
            value={weaponClass}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="txtFrame" className='form-label'>Frame</label>
          <input 
            type="text" 
            name="txtFrame" 
            id="txtFrame" 
            placeholder='Frame' 
            className='form-control'
            onChange={(event) => setFrame(event.currentTarget.value)} 
            value={frame}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="numImpact" className='form-label'>Impact</label>
          <input 
            type="number" 
            name="numImpact" 
            id="numImpact" 
            placeholder='Impact' 
            className='form-control'
            onChange={(event) => setImpact(event.currentTarget.value)} 
            value={impact}
          />
        </div>
        <div className='col-md-2'>
          <label htmlFor="numRange" className='form-label'>Range</label>
          <input 
            type="number" 
            name="numRange" 
            id="numRange" 
            placeholder='Range' 
            className='form-control'
            onChange={(event) => setRange(event.currentTarget.value)} 
            value={range}
          />
        </div>
      </div>
      <div className='row'>

      </div>
      <div className='col-md-4'>
        <div className='col-md-2'>
          <label htmlFor="fileUpload" className='form-label'>Student Image</label>
          <input type="file" name="fileUpload" id="fileUpload" className='form-control' onChange={imageUpdate}/>
        </div>
        <button type="button" className='btn btn-success btn-lg' id='btnAdd' onClick={doWork}>Add Weapon <FontAwesomeIcon icon={faPlusCircle}/></button>
      </div>
    </div>
  )
}

export default AddWeapon
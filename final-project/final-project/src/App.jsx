import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import AddWeapon from './components/AddWeapon';
import _ from 'lodash';
import Weapon from './components/Weapon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [allWeapons, setAllWeapons] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [weaponClass, setWeaponClass] = useState('')

  useEffect(() => {
    if(localStorage){
      const weaponsLocalStorage = JSON.parse(localStorage.getItem('weapons'));

      if(weaponsLocalStorage){
        saveWeapons(weaponsLocalStorage);
      }
      else{
        saveWeapons(weapons);
      }
    }
    saveWeapons(weapons);
  }, []);


  const weapons = [{
    id: nanoid(),
    name: "Firefright",
    weaponClass: "Auto Rifle",
    frame: "Precision Frame",
    image: 'images/firefright.jpg',
    impact: 29,
    range: 58,
    stability: 41,
    handling: 41,
    reloadSpeed: 44,
    aimAssist: 38,
    zoom: 17,
    airEffect: 17,
    rpm: 450,
    mag: 34,
    recoil: 61
  }];

  const saveWeapons = (weapons) => {
    setAllWeapons(weapons);
    setSearchResults(weapons);
    if(localStorage){
      localStorage.setItem('weapons', JSON.stringify(weapons));
      console.log('saved to local storage');
    }
  }

  const addWeapon = (newWeapon) => {
    const updatedWeapons = [...allWeapons, newWeapon]
    saveWeapons(updatedWeapons);
  }

  const removeWeapon = (weaponToDelete) => {
    // console.table(studentToDelete);
    const updatedWeaponArray = allWeapons.filter(weapon => weapon.id !== weaponToDelete.id);
    saveWeapons(updatedWeaponArray);
  }

  const updateWeapon = (updatedWeapon) => { 
    // console.table(updatedStudent)
    const updatedWeaponArray = allWeapons.map(weapon => weapon.id === updatedWeapon.id ? {...weapon, ...updatedWeapon} : weapon)
    saveWeapons(updatedWeaponArray);
  }

  const searchWeapons = () => {
    let keywordsArray = [];
    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(weaponClass){
      keywordsArray.push(weaponClass)
    }

    if(keywordsArray.length > 0){
      const searchResults = allWeapons.filter(weapon => {
        for(const word of keywordsArray){
          if(weapon.name.toLowerCase().includes(word) ||
             weapon.weaponClass === word){
              return true;
             }
        }
        return false;
      });
      setSearchResults(searchResults);
    } 
    else {
      setSearchResults(allWeapons);
    }
  }

  return (
    <div className='container'>
      <div className='row' id='allWeapons'>
        <h3>Weapons</h3>
        {searchResults && searchResults.map((weapon) => (
          <div className='col-lg-2' key={weapon.id}>
            <Weapon weapon={weapon} removeWeapon={removeWeapon} updateWeapon={updateWeapon}/>
          </div>
        ))}

      </div>

      {/* {!allWeapons && <button type='button' className='btn btn-large btn-success' onClick={() => setallWeapons(students)}>Save Students</button>} */}
    
      <AddWeapon addWeapon={addWeapon}/>
      <div className='row mt-4' id='searchWeapons'>
        <h3>Search Weapons</h3>
        <div className='col-md-4'>
          <label htmlFor="txtKeywords">Search by Name</label>
          <input type="text" className='form-control' placeholder='Search Name' id='txtKeywords' name='txtKeywords' onChange={e => setKeywords(e.currentTarget.value)} value={keywords}/>
        </div>
        <div className='col-md-4'>
          <label htmlFor="select">Search by Weapon Class</label>
          <select className='form-select' value={weaponClass} onChange={e => setWeaponClass(e.currentTarget.value)}>
            <option value="">Select Class</option>
            {_(allWeapons).map(weapon => weapon.weaponClass).sort().uniq().map(weaponClass => <option key={weaponClass} value={weaponClass}>{weaponClass}</option>).value()}
          </select>
        </div>
        <div className='col-md-4 mt-3'>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchWeapons}>Search Weapons <FontAwesomeIcon icon={faSearch}/></button>
        </div>
      </div>
    </div>
  )
}

export default App

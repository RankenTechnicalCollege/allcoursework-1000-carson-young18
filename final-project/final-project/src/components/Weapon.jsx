/* eslint-disable react/prop-types */
// import React from 'react'

import { faFloppyDisk, faMagicWandSparkles, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"

const Weapon = (props) => {
  const [editMode, setEditMode] = useState(false);
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

  useEffect(() => {
    setName(props.weapon.name);
    setWeaponClass(props.weapon.weaponClass);
    setFrame(props.weapon.frame);
    setImpact(props.weapon.impact);
    setRange(props.weapon.range);
    setStability(props.weapon.stability);
    setHandling(props.weapon.handling);
    setReloadSpeed(props.weapon.reloadSpeed);
    setAimAssist(props.weapon.aimAssist);
    setZoom(props.weapon.zoom);
    setAirEffect(props.weapon.airEffect);
    setRPM(props.weapon.rpm);
    setMag(props.weapon.mag);
    setRecoil(props.weapon.recoil);
  },[]);

  const saveWeapon = () => {
    setEditMode(false);
    const updatedWeapon = {
      name: name, 
      weaponClass: weaponClass, 
      frame: frame, 
      impact: impact,
      range: range,
      stability: stability,
      handling: handling,
      reloadSpeed: reloadSpeed,
      aimAssist: aimAssist,
      zoom: zoom,
      airEffect: airEffect,
      rpm: rpm,
      mag: mag,
      recoil: recoil, 
      id: props.weapon.id, 
      image: props.weapon.image};
    props.updateWeapon(updatedWeapon)
  }

  return (
    <div className='card'>
      <img src={props.weapon.image} alt="weapon" className='card-image-top mx-auto'/>
      {!editMode && 
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'>{props.weapon.name}</li>
          <li className='list-group-item text-center'>{props.weapon.weaponClass}</li>
          <li className='list-group-item text-center'>{props.weapon.frame}</li>
          <li className='list-group-item text-center'>{props.weapon.impact}</li>
          <li className='list-group-item text-center'>{props.weapon.range}</li>
          <li className='list-group-item text-center'>{props.weapon.stability}</li>
          <li className='list-group-item text-center'>{props.weapon.handling}</li>
          <li className='list-group-item text-center'>{props.weapon.reloadSpeed}</li>
          <li className='list-group-item text-center'>{props.weapon.aimAssist}</li>
          <li className='list-group-item text-center'>{props.weapon.zoom}</li>
          <li className='list-group-item text-center'>{props.weapon.airEffect}</li>
          <li className='list-group-item text-center'>{props.weapon.rpm}</li>
          <li className='list-group-item text-center'>{props.weapon.mag}</li>
          <li className='list-group-item text-center'>{props.weapon.recoil}</li>
          <button type='button' className='btn btn-danger' onClick={() => props.removeWeapon(props.weapon)}>Delete Weapon <FontAwesomeIcon icon={faWarning}/></button>
          <button type="button" className="btn btn-warning" onClick={() => setEditMode(true)}>Edit Weapon <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
        </ul>
      }
      {editMode && 
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={name} onChange={e => setName(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={weaponClass} onChange={e => setWeaponClass(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={frame} onChange={e => setFrame(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={impact} onChange={e => setImpact(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={range} onChange={e => setRange(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={stability} onChange={e => setStability(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={handling} onChange={e => setHandling(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={reloadSpeed} onChange={e => setReloadSpeed(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={aimAssist} onChange={e => setAimAssist(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={zoom} onChange={e => setZoom(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={airEffect} onChange={e => setAirEffect(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={rpm} onChange={e => setRPM(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={mag} onChange={e => setMag(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><input type="text" className="form-control" value={recoil} onChange={e => setRecoil(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveWeapon}>Save <FontAwesomeIcon icon={faFloppyDisk}/></button></li>
        </ul>
      }
    </div>
  )
}

export default Weapon
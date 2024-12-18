import React, { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState('');

  const getUser = (user) => {
    fetch("/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <input type="text" name='username' id='username' onChange={e => setUser(e.currentTarget.value)} value={user}/>
      <button type="button" onClick={getUser(user)}>Search</button>
    </div>
  )
}

export default App
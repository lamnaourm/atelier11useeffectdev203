import { useState } from 'react';
import './App.css';
import ListUser from './components/ListUser';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [utilisateurs, setUtilisateurs] = useState([])

  useEffect(()=> {
    const getUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      return res.data;
    }
    getUsers().then(users => setUtilisateurs(users))
  }, [])
  
  return (
    <div className="container">
      {utilisateurs.length===0 ? "Pas d'utilisateurs"
           : <ListUser users={utilisateurs}/>}
    </div>
  );
}

export default App;

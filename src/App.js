// import './App.css';
import { useState, useEffect } from 'react';
import profileImage from './img/rango90x90.jpg';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchItems();
  },[reqType]);

  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: tkroo</h2>
      <img src={profileImage} alt="profile-image" />
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

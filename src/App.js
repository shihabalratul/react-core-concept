// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.20' },
    { name: 'InDesign', price: '$20.50' }
  ]
  const players = ['Sakib', 'Mushfiq', 'Mashrafi', 'Mustafiz', 'Miraz', 'Tamim'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a react guy.</h1>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <ol>
          {players.map(name => <li>{name}</li>)}
        </ol>
        <Counter></Counter>
        <Users></Users>
        <Person name='Shihab Al Ratul' profession='Web-developer'></Person>
        <Person name='Abdun Nafi' profession='Graphics Designer'></Person>
        <Person name='Jhony Sheikh' profession='Dokandar'></Person>
      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Product(props) {
  const { name, price } = props.product;
  const style = {
    margin: "2px",
    padding: "10px",
    backgroundColor: "gray"
  }
  console.log(name, price)
  return (
    <div style={style}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  return (
    <div style={{ border: '2px solid red', margin: '5px' }}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}


export default App;

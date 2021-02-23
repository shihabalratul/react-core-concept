import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am a react guy.</h1>
      <Person name='Shihab Al Ratul' profession='Web-developer'></Person>
      <Person name='Abdun Nafi' profession='Graphics Designer'></Person>
      <Person name='Jhony Sheikh' profession='Dokandar'></Person>
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'1px solid red', margin:'5px', backgroundColor:'green'}}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  )
}
export default App;

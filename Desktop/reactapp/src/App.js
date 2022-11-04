import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>I am React Developer</h1>
       <Person name="Abdullah" cgpa="4" Id="1223455"></Person>
       <Person name="Alim" cgpa="3" Id="122244"></Person>
       <Person name="Rakib" cgpa="3.5" Id="134455"></Person>
        <Person name="Abdullah" cgpa="4" Id="1223455"></Person>
       <Person name="Alim" cgpa="3" Id="122244"></Person>
       <Person name="Rakib" cgpa="3.5" Id="134455"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'2px solid green',
    margin:'12px',
    padding:'10px',
    width:'400px'
  }
  return(
    <div style={personStyle}>
      <h2>Name:{props.name}</h2>
      <h3>cgpa:{props.cgpa}</h3>
      <h3>Id:{props.Id}</h3>


    </div>

  )
}

export default App;

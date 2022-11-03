import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am React Developer</h1>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border:'2px solid green',
    margin:'12px',
    padding:'10px'
  }
  return(
    <div style={personStyle}>
      <h1>Name: Faridul Islam</h1>
      <h3>Day of the  year</h3>


    </div>

  )
}

export default App;

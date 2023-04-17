import './App.css';

function App() {
  let name = 'react App'
  return (
    <div className="App">
      <header className="App-header">
          {name}
          <Deo></Deo>
      </header>
    </div>
  );
}

function Deo() {
  return (
    <div className="App">
      <header className="App-header">
          Gap in react
      </header>
    </div>
  );
}

export default App;

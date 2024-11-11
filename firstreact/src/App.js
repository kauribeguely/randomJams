
import './App.css';
import List from './components/List';

function App() {
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ?
      <div>
        <List></List>
        <List/>
      </div>
      :
      <p>Nope</p>

      }

    </div>
  );
}

export default App;

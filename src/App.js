import './App.css';
import Table from './Components/Table';
import Posts from './Components/Posts';
import Store from './Components/Store';

function App() {
  return (
    <div className="main-container">      
    <h1 style={{textAlign: "center"}}>A ReactJs Demo by Nick</h1>
      <Store>
        <Posts/>
        <Table/>
      </Store>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  //BEM format
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

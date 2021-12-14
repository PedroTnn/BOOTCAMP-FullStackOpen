//import logo from './logo.svg';
import './App.css';
import Mensaje from './mensaje';


const App = () => {
  return (
    <div className="App">
      <Mensaje color = 'red' message = "Estamos trabajando" />
      <Mensaje  color = 'blue' message = "En un curso " />
      <Mensaje color = 'green'message = "De react" />
      
    </div>
  );
}

export default App;






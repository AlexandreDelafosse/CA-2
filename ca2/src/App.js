import './App.css';
import Animals from './components/Animals'
import AnimalsEdit from './components/AnimalsEdit'
import AnimalsView from './components/AnimalsView'
import AnimalsAdd from './components/AnimalsAdd'
import AnimalsDelete from './components/AnimalsDelete'
import {Routes, Route } from 'react-router-dom'; 

function App(props) {
  return (
    <div className="App">

    <Routes>
      <Route exact path="/" element={<Animals/>} />
      <Route path="/editAnimals" element={<AnimalsEdit/>} />
      <Route path="/viewAnimals" element={<AnimalsView/>} />
      <Route path="/addAnimals" element={<AnimalsAdd/>} />
      <Route path="/deleteAnimals" element={<AnimalsDelete/>} />
      </Routes>

    </div>
  );
}

export default App;
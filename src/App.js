import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './views/Form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/responses'/>
      </Routes>
    </div>
  );
}

export default App;

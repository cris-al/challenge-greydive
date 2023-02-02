import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './views/Form/Form';
import Response from './views/Response/Response';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/response/:id' element={<Response />}/>
      </Routes>
    </div>
  );
}

export default App;

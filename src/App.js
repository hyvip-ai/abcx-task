import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cards from './Pages/Cards';
import Details from './Pages/Details';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
function App() {
  const checking = localStorage.getItem('token2');
  if (checking == null) {
    return (
      <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </>
    );
  }

  return (
    <div className='App'>
      <p>returned this one</p>
      <Routes>
        <Route exact path='/dash' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

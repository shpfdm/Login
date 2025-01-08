import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import LogIn from './LogIn';
import MyPage from './MyPage';
import Update from './Update';

function App() {
  return (
    <div className='App'>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogIn />}></Route>
            <Route path='/mypage' element={<MyPage />}></Route>
            <Route path='/mypage/update' element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;

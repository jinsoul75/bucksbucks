import './App.css';
import { NavLink, Link } from 'react-router';

function App() {
  return (
    <>
      <h1>렌딩페이지</h1>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>

      <Link to="/login">로그인페이지이동</Link>
    </>
  );
}

export default App;

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      Login
      <div>
        <Link to="/dashboard">dashboard로 이동</Link>
      </div>
    </div>
  );
}

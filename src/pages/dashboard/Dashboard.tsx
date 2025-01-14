import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard">calendar로 이동</Link>
      <Link to="/dashboard/statistics">statistics로 이동</Link>
      <Outlet />
    </div>
  );
}

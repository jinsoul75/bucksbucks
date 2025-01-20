import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Dashboard() {
  return (
    <div className="flex gap-5">
      <Nav />
      <Outlet />
    </div>
  );
}

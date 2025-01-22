import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Dashboard() {
  return (
    <div className="flex grow w-full h-full gap-5 p-4">
      <Nav />
      <Outlet />
    </div>
  );
}

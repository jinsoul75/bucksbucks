import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [selectedMenu, setSelectedMenu] = useState<'calendar' | 'statistics'>('calendar');

  const menuItemClass = (menu: 'calendar' | 'statistics') =>
    `p-2 border border-gray-800 rounded-md transition-colors duration-200 ${
      selectedMenu === menu ? 'bg-yellow-dark text-white' : 'hover:bg-yellow-light'
    }`;

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li
          className={menuItemClass('calendar')}
          onClick={() => setSelectedMenu('calendar')}
        >
          <Link to="/dashboard">calendar로 이동</Link>
        </li>
        <li
          className={menuItemClass('statistics')}
          onClick={() => setSelectedMenu('statistics')}
        >
          <Link to="/dashboard/statistics">statistics로 이동</Link>
        </li>
      </ul>
    </nav>
  );
}

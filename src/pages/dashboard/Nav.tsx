import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [selectedMenu, setSelectedMenu] = useState<'calendar' | 'statistics'>('calendar');

  const menuItemClass = (menu: 'calendar' | 'statistics') =>
    `p-2 border border-gray-800 rounded-md transition-colors duration-200 cursor-pointer ${
      selectedMenu === menu ? 'bg-yellow-dark text-white' : 'hover:bg-yellow-hover'
    }`;

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li className={menuItemClass('calendar')}>
          <Link
            to="/dashboard"
            className="block w-full h-full"
            onClick={() => setSelectedMenu('calendar')}
          >
            calendar로 이동
          </Link>
        </li>
        <li className={menuItemClass('statistics')}>
          <Link
            to="/dashboard/statistics"
            className="block w-full h-full"
            onClick={() => setSelectedMenu('statistics')}
          >
            statistics로 이동
          </Link>
        </li>
      </ul>
    </nav>
  );
}

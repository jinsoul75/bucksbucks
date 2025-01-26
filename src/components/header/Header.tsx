import { Link } from 'react-router';

import Image from '../image/Image';
import bucksbucks from '@/assets/images/bucksbucks.webp';
import logo from '@/assets/images/Logo.webp';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 h-[60px] border-b flex items-center bg-yellow-light">
      <Link to="/">
        <div className="flex ml-4">
          <Image src={bucksbucks} alt="logo" className="w-8 h-8" />
          <Image src={logo} alt="logo" className="h-8" />
        </div>
      </Link>
    </header>
  );
}

import { Link } from 'react-router';

import Image from './components/image/Image';
import Logo from '@/assets/Logo.webp';
import bucksbucks from '@/assets/bucksbucks.webp';
function App() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Image src={bucksbucks} alt="logo" className="w-1/5" />
      <Image src={Logo} alt="logo" className="w-1/3" />

      <Link to="/login">로그인페이지이동</Link>
    </section>
  );
}

export default App;

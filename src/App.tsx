import { Link } from 'react-router';

import Image from './components/image/Image';
import Logo from '@/assets/images/Logo.webp';
import bucksbucks from '@/assets/images/bucksbucks.webp';
import Button from './components/common/button/Button';

function App() {

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Image src={bucksbucks} alt="logo" className="w-1/5" />
      <Image src={Logo} alt="logo" className="w-1/3" />

      <div className="flex gap-2">
        <Link to="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </section>    
  );
}

export default App;

import { Link } from 'react-router-dom';
import kakao from '@/assets/images/kakao.webp';
import google from '@/assets/images/google.webp';
import naver from '@/assets/images/naver.webp';
import Image from '../../components/image/Image';

export default function Login() {
  return (
    <div>
      <div>
        <Link to="/dashboard">dashboard로 이동</Link>
        <Image src={kakao} alt="kakao" className="w-10 h-10" />
        <Image src={google} alt="google" className="w-10 h-10" />
        <Image src={naver} alt="naver" className="w-10 h-10" />
      </div>
    </div>
  );
}

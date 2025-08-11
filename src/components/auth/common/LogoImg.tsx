import logo from '@/assets/yudilloLogo.svg';
import { logoImg } from './LogoImg.css';

export default function LogoImg() {
  return (
    <section className={logoImg.imgSection}>
      <img className={logoImg.img} src={logo} alt='logo image' />
    </section>
  );
}

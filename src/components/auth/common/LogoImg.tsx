import logo from '@/assets/yudilloLogo.svg';
import * as s from './LogoImg.css';

export default function LogoImg() {
  return (
    <section className={s.imgSection}>
      <img className={s.img} src={logo} alt='logo image' />
    </section>
  );
}

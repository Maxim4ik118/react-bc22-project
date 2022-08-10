import { Menu } from 'components';

import mockUserAva from '../../assets/images/mock-user-ava.svg';

import s from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={s.aside}>
      <div className={s.logoContainer}></div>
      <Menu />
      <div className={s.user}>
        <img src={mockUserAva} alt="User" />
        <span className={s.userName}>User</span>
      </div>
    </aside>
  );
}

export default Sidebar;

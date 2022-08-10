import mockUserAva from '../../assets/images/mock-user-ava.svg';
import university from '../../assets/images/university.svg';
import faculties from '../../assets/images/faculties.svg';
import s from './Sidebar.module.css'

function Sidebar() {

  return (
    <aside className={s.aside}>
      <div className={s.logoContainer}></div>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navItem}><a href="#" className={s.navLink}><img src={university}/>Университет</a></li>
          <li className={s.navItem}><a href="#" className={s.navLink}><img src={faculties}/>Факультеты</a></li>
        </ul>
      </nav>
      <div className={s.user}>
        <img src={mockUserAva} alt='User' />
        <span className={s.userName}>User</span>
      </div>
    </aside>
  );
}

export default Sidebar;

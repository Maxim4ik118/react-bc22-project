import s from './Menu.module.css';
import PropTypes from 'prop-types';
import { menuConfig } from '../../constants/menuConfig';

function Menu() {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {menuConfig.map(({ img, to, name }) => {
          return <MenuItem key={name} img={img} to={to} name={name} />;
        })}
      </ul>
    </nav>
  );
}

function MenuItem({ img, to = '/', name }) {
  return (
    <li className={s.navItem}>
      <a href={to} className={s.navLink}>
        <img src={img} />
        {name}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  img: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Menu;

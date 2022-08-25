import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';
import PropTypes from 'prop-types';
import { menuConfig } from '../../constants/menuConfig';

function Menu() {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {menuConfig.map(({ Icon, to, name }) => {
          return <MenuItem key={name} Icon={Icon} to={to} name={name} />;
        })}
      </ul>
    </nav>
  );
}

function MenuItem({ Icon, to = '/', name }) {
  return (
    <li className={s.navItem}>
      <NavLink to={to} className={s.navLink}>
        <Icon />
        {name}
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  Icon: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Menu;

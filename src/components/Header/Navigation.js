import './style.scss';
import menuItems from './MenuItems';

const Navigation = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation;
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { SideBar } from './SideBar';
import './Header.css';

export default function Header() {
  const [sidebar, setSidebar] = React.useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
      <div className='header'>
        <Link to="#">
            <MenuIcon fontSize="small" onClick={showSidebar} className="header-icons"/>
        </Link>
      </div>
      <nav className={sidebar?'header-hamburger-active': 'header-hamburger'}>
        <ul>
            <li>
                <Link to="#">
                    <CloseIcon onClick={showSidebar}/>
                </Link>
            </li>
            {SideBar.map((item,index) => {
                return (
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <spam>{item.title}</spam>
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
    </>
  );
}

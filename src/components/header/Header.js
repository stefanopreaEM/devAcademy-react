import HeaderItem from '../header-item/HeaderItem';
import { Link } from "react-router-dom";
import './Header.css';


const headerItems = [
  {
    id: 'i1',
    content: <Link to={'/'}>Home</Link>
  },
  {
    id: 'i2',
    content: <Link to={'/user'}>User</Link>
  },
  {
    id: 'i3',
    content: <Link to={'/description'}>Description</Link>
  },
  {
    id: 'i4',
    content: <Link to={'/album'}>Album</Link>
  }
];

function Header (props) {

  // props is an object 
  // is immutable
  // think about it as a window for data to flow

  // const title = props.title;
  const { title } = props;



  return (
    <header className="MainHeader">
      {title}
      <ul className='MainHeaderList'>
        {
          headerItems.map((item, idx) => {
            return (
              <HeaderItem key={idx}>
                {item.content}
              </HeaderItem>
            )
          })
        }
      </ul>
    </header>
  )
}

export default Header;
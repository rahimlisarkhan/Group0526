import { Nav } from '../Nav';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';


function Header(props) {

  console.log("props",props);
  

  return (
    <header className={styles.header}>
      {props.showLogo ? <img width={50} height={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&s' /> 
      : <p>No Logo</p>}
      <h1>My Application Header</h1>

      <Nav age={props.ageJavad} />
      <Button variant="warning" size='lg'>Bootstrap Button</Button>
    </header>
  )
}

export default Header;
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Header = () => (
    
   <Nav activeKey="/home">

       <Nav.Link as ={Link} to='/'>
        Home
        </Nav.Link> 
        <Nav.Link as={Link} to='/about'>
     About
     </Nav.Link>

      </Nav>

)
    
 
 export default Header
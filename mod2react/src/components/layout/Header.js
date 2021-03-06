
import {Link} from 'react-router-dom'
// javascript object - properties of classes

import classes from './Header.module.scss';
         function Header(props) {
  return (
   
<div >
<header classnName={classes.head} >
             <nav>
                  <ul>
                    <li>
                         <Link to='/example1'>Example 1</Link>
                    </li>
                    
                    <li>
                         <Link to='/Example-2'>Example 2</Link>
                    </li>
                    <li>
                         <Link to='/NewMeetup'>New Meet Up</Link>
                    </li>
                  </ul>
             </nav>
             </header>
          <h3 className="headline">Simple React App Page </h3>
             <div className="rightSection">
             <h3>{props.text}</h3>
             
            
       
       
              <div className="phoneNumber">
                    Questions? <span title="PhoneNumber">1.866.654.5572</span>   
              </div>
              </div>
      
         </div>
  
  );
}

export default Header;
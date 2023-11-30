
import { Link } from "react-router-dom";

  const Navbar = () => {

    return ( 
        <nav className="navbar">
          
            <h1>MEDBOARD</h1>
           <div className="nav">
           <Link to="/appoinment">appoinment</Link>
                <Link to="/prescription" >prescription</Link>
                <Link to="/report" >report</Link>
             
              </div>
        </nav>
     );
}
 

 
export default Navbar;
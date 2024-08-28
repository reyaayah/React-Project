import "../styles/navbar_styles.css";
import { Link } from "react-router-dom";
const Navbar=({title})=>{
    return(
        <>
        <div id='nav'>
          <div id='logo'>
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="logo" width={80} height={80} />
        <h1>{title}</h1>
          </div>
        
        <div id='menus'>
          <p><Link to="/">Home</Link></p>
        
          <p><Link to="/documents">Documents</Link></p>
          <p><Link to="/settings">Settings</Link></p>
          <p><Link to="/profile">Profile</Link></p>
          <p><Link to="/downloads">Downloads</Link></p>
        </div>
        </div>
        </>
    );
}
export default Navbar
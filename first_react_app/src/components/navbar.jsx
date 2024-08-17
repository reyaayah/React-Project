import "../styles/navbar_styles.css";
const Navbar=({title})=>{
    return(
        <>
        <div id='nav'>
          <div id='logo'>
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="logo" width={80} height={80} />
        <h1>{title}</h1>
          </div>
        
        <div id='menus'>
          <p><link href="../pages/home.jsx"></link>Home</p>
          <p>Documents</p>
          <p>settings</p>
          <p>Profile</p>
          <p>Downloads</p>
        </div>
        </div>
        </>
    );
}
export default Navbar
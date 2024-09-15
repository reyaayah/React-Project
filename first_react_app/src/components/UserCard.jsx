import "../styles/user_card.css"
const UserCard=()=>{
    return(
        <>
        <div className="card-container" >
        <div className="header">
            <h1>Leanne Graham</h1>
            <h2>@Bret</h2>
        </div>
        <div className="info" id="con">
            <p><strong>Email:</strong> Sincere@gmail.com</p>
            <p><strong> Phone:</strong>1-22-3-4534-234</p>
            <p><strong>Website</strong>hiidegard.org</p>
        </div>
        <div className="address" id="con">
            <p><strong>Address</strong><br />Apt 556,Kulas Light <br />Gwenborough,99434-34</p>
            </div>
            <div className="company" id="con">
                <p><strong>Company</strong><br />Ramaguera-crona</p>
                <p><strong>CatchPhrase: </strong><br />"Multilayered client server neutral-net"</p>
                <p><strong>Business:</strong>harness real-time e-markets</p>
            </div>
        </div>  
        </>
       
        
    );
}
export default UserCard
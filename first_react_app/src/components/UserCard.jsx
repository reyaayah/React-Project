import "../styles/user_card.css"
const UserCard = ({ user }) => {
    return (
        <>
            <div id="card-container" >
                <div id="header">
                    <h1>{user.name} </h1>
                    <h2>@{user.username}</h2>
                </div>
                <div>
                    <div className="info" id="con">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong> Phone:</strong>{user.phone}</p>
                        <p><strong>Website</strong>{user.website}</p>
                    </div>
                    <div className="address" id="con">
                        <p><strong>Address</strong><br />{user.address.street}</p>
                    </div>
                    <div className="company" id="con">
                        <p><strong>Company</strong><br />{user.company.name}</p>
                        <p><strong>CatchPhrase: </strong><br />{user.company.catchPhrase}</p>
                        <p><strong>Business:</strong>{user.company.bs}</p>
                    </div>
                </div>

            </div>

        </>
    );
}
export default UserCard
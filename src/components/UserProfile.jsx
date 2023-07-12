import '../styles/UserProfile.css';

const UserProfile = ({user, img}) => (
    <div className="userContainer">
        <img src={img} />
        <p className="text">{user.name}</p>
        <p className="text">{user.email}</p>
    </div>
)

export default UserProfile;